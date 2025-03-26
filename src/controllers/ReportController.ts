import { FastifyPluginAsync } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { PrismaClient } from "../lib/prisma_client";
import { authAdminMiddleware } from "../middlewares/authMiddleware";

const prisma = new PrismaClient();

// Taxas de cobrança por hora (em reais)
const RATES = {
  CAR: 100,
  MOTORCYCLE: 50,
} as const;

// Função auxiliar para formatar valores monetários
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA",
  }).format(value);
};

// Função auxiliar para formatar tempo
const formatDuration = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

  return {
    hours,
    minutes,
    formatted: `${hours}h ${minutes}min`,
  };
};

export class ReportController {
  constructor() {}

  register: FastifyPluginAsync = async (fastify) => {
    // Relatório de ocupação por estabelecimento
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/occupation",
      {
        schema: {
          summary: "Relatório de ocupação por estabelecimento",
          tags: ["Reports"],
          security: [{ bearerAuth: [] }],
          querystring: z.object({
            establishmentId: z.string().uuid().optional(),
            startDate: z.string().datetime().optional(),
            endDate: z.string().datetime().optional(),
            page: z.number().min(1).default(1),
            limit: z.number().min(1).max(100).default(10),
          }),
          response: {
            200: z.object({
              data: z.array(
                z.object({
                  establishmentId: z.string().uuid(),
                  establishmentName: z.string(),
                  totalSlots: z.number(),
                  occupiedSlots: z.number(),
                  availableSlots: z.number(),
                  carSlots: z.object({
                    total: z.number(),
                    occupied: z.number(),
                    available: z.number(),
                  }),
                  motorcycleSlots: z.object({
                    total: z.number(),
                    occupied: z.number(),
                    available: z.number(),
                  }),
                  occupationRate: z.number(),
                })
              ),
              pagination: z.object({
                total: z.number(),
                page: z.number(),
                limit: z.number(),
                totalPages: z.number(),
              }),
            }),
          },
        },
        preHandler: authAdminMiddleware,
      },
      async (request, reply) => {
        const { establishmentId, startDate, endDate, page, limit } =
          request.query;

        const where = {
          ...(establishmentId && { establishmentId }),
          ...(startDate &&
            endDate && {
              entryTime: {
                gte: new Date(startDate),
                lte: new Date(endDate),
              },
            }),
        };

        const [establishments, total] = await Promise.all([
          prisma.establishment.findMany({
            where: establishmentId ? { id: establishmentId } : undefined,
            include: {
              ParkingEntry: {
                where: {
                  ...where,
                  exitTime: null,
                },
                include: {
                  vehicle: true,
                },
              },
            },
            skip: (page - 1) * limit,
            take: limit,
          }),
          prisma.establishment.count({
            where: establishmentId ? { id: establishmentId } : undefined,
          }),
        ]);

        const report = establishments.map((establishment) => {
          const occupiedCarSlots = establishment.ParkingEntry.filter(
            (entry) => entry.vehicle.type === "CAR"
          ).length;

          const occupiedMotorcycleSlots = establishment.ParkingEntry.filter(
            (entry) => entry.vehicle.type === "MOTORCYCLE"
          ).length;

          const totalSlots =
            establishment.carSlots + establishment.motorcycleSlots;
          const occupiedSlots = occupiedCarSlots + occupiedMotorcycleSlots;
          const occupationRate = (occupiedSlots / totalSlots) * 100;

          return {
            establishmentId: establishment.id,
            establishmentName: establishment.name,
            totalSlots,
            occupiedSlots,
            availableSlots: totalSlots - occupiedSlots,
            carSlots: {
              total: establishment.carSlots,
              occupied: occupiedCarSlots,
              available: establishment.carSlots - occupiedCarSlots,
            },
            motorcycleSlots: {
              total: establishment.motorcycleSlots,
              occupied: occupiedMotorcycleSlots,
              available:
                establishment.motorcycleSlots - occupiedMotorcycleSlots,
            },
            occupationRate,
          };
        });

        return reply.status(200).send({
          data: report,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        });
      }
    );

    // Relatório de faturamento por período
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/revenue",
      {
        schema: {
          summary: "Relatório de faturamento por período",
          tags: ["Reports"],
          security: [{ bearerAuth: [] }],
          querystring: z.object({
            establishmentId: z.string().uuid().optional(),
            startDate: z.string().datetime(),
            endDate: z.string().datetime(),
          }),
          response: {
            200: z.object({
              totalRevenue: z.number(),
              formattedTotalRevenue: z.string(),
              totalVehicles: z.number(),
              averageTime: z.object({
                hours: z.number(),
                minutes: z.number(),
                formatted: z.string(),
              }),
              byVehicleType: z.array(
                z.object({
                  type: z.enum(["CAR", "MOTORCYCLE"]),
                  count: z.number(),
                  revenue: z.number(),
                  formattedRevenue: z.string(),
                })
              ),
              byEstablishment: z.array(
                z.object({
                  establishmentId: z.string().uuid(),
                  establishmentName: z.string(),
                  revenue: z.number(),
                  formattedRevenue: z.string(),
                  vehicleCount: z.number(),
                })
              ),
              dailyRevenue: z.array(
                z.object({
                  date: z.string(),
                  revenue: z.number(),
                  formattedRevenue: z.string(),
                  vehicleCount: z.number(),
                })
              ),
            }),
          },
        },
        preHandler: authAdminMiddleware,
      },
      async (request, reply) => {
        const { establishmentId, startDate, endDate } = request.query;

        const where = {
          ...(establishmentId && { establishmentId }),
          entryTime: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
          exitTime: {
            not: null,
          },
        };

        const parkingEntries = await prisma.parkingEntry.findMany({
          where,
          include: {
            vehicle: true,
            establishment: true,
          },
        });

        // Cálculo do faturamento total
        const totalRevenue = parkingEntries.reduce((acc, entry) => {
          if (!entry.exitTime) return acc;
          const duration = entry.exitTime.getTime() - entry.entryTime.getTime();
          const hours = duration / (1000 * 60 * 60);
          const rate = RATES[entry.vehicle.type];
          return acc + hours * rate;
        }, 0);

        // Agrupamento por tipo de veículo
        const byVehicleType = ["CAR", "MOTORCYCLE"].map((type) => {
          const entries = parkingEntries.filter(
            (entry) => entry.vehicle.type === type
          );
          const revenue = entries.reduce((acc, entry) => {
            if (!entry.exitTime) return acc;
            const duration =
              entry.exitTime.getTime() - entry.entryTime.getTime();
            const hours = duration / (1000 * 60 * 60);
            return acc + hours * RATES[type as keyof typeof RATES];
          }, 0);

          return {
            type: type as "CAR" | "MOTORCYCLE",
            count: entries.length,
            revenue,
            formattedRevenue: formatCurrency(revenue),
          };
        });

        // Agrupamento por estabelecimento
        const byEstablishment = parkingEntries.reduce(
          (acc, entry) => {
            const existing = acc.find(
              (item) => item.establishmentId === entry.establishmentId
            );
            if (existing) {
              if (!entry.exitTime) {
                return acc;
              }
              const duration =
                entry.exitTime.getTime() - entry.entryTime.getTime();
              const hours = duration / (1000 * 60 * 60);
              const rate = RATES[entry.vehicle.type];
              existing.revenue += hours * rate;
              existing.vehicleCount += 1;
            } else {
              if (!entry.exitTime) {
                return acc;
              }
              const duration =
                entry.exitTime.getTime() - entry.entryTime.getTime();
              const hours = duration / (1000 * 60 * 60);
              const rate = RATES[entry.vehicle.type];
              acc.push({
                establishmentId: entry.establishmentId,
                establishmentName: entry.establishment.name,
                revenue: hours * rate,
                vehicleCount: 1,
              });
            }
            return acc;
          },
          [] as Array<{
            establishmentId: string;
            establishmentName: string;
            revenue: number;
            vehicleCount: number;
          }>
        );

        // Formata os valores monetários dos estabelecimentos
        const formattedByEstablishment = byEstablishment.map((item) => ({
          ...item,
          formattedRevenue: formatCurrency(item.revenue),
        }));

        // Agrupamento por dia
        const dailyRevenue = parkingEntries.reduce((acc, entry) => {
          const date = entry.entryTime.toISOString().split("T")[0];
          const existing = acc.find((item) => item.date === date);
          if (existing) {
            if (!entry.exitTime) {
              return acc;
            }
            const duration =
              entry.exitTime.getTime() - entry.entryTime.getTime();
            const hours = duration / (1000 * 60 * 60);
            const rate = RATES[entry.vehicle.type];
            existing.revenue += hours * rate;
            existing.vehicleCount += 1;
          } else {
            if (!entry.exitTime) {
              return acc;
            }
            const duration =
              entry.exitTime.getTime() - entry.entryTime.getTime();
            const hours = duration / (1000 * 60 * 60);
            const rate = RATES[entry.vehicle.type];
            acc.push({
              date,
              revenue: hours * rate,
              vehicleCount: 1,
            });
          }
          return acc;
        }, [] as Array<{ date: string; revenue: number; vehicleCount: number }>);

        // Formata os valores monetários diários
        const formattedDailyRevenue = dailyRevenue.map((item) => ({
          ...item,
          formattedRevenue: formatCurrency(item.revenue),
        }));

        // Cálculo do tempo médio de permanência
        const totalDuration = parkingEntries.reduce((acc, entry) => {
          if (!entry.exitTime) return acc;
          return acc + (entry.exitTime.getTime() - entry.entryTime.getTime());
        }, 0);
        const averageTime = formatDuration(
          totalDuration / parkingEntries.length
        );

        return reply.status(200).send({
          totalRevenue,
          formattedTotalRevenue: formatCurrency(totalRevenue),
          totalVehicles: parkingEntries.length,
          averageTime,
          byVehicleType,
          byEstablishment: formattedByEstablishment,
          dailyRevenue: formattedDailyRevenue,
        });
      }
    );

    // Relatório de veículos mais frequentes
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/frequent-vehicles",
      {
        schema: {
          summary: "Relatório de veículos mais frequentes",
          tags: ["Reports"],
          security: [{ bearerAuth: [] }],
          querystring: z.object({
            establishmentId: z.string().uuid().optional(),
            limit: z.number().min(1).max(100).default(10),
            page: z.number().min(1).default(1),
            startDate: z.string().datetime().optional(),
            endDate: z.string().datetime().optional(),
          }),
          response: {
            200: z.object({
              data: z.array(
                z.object({
                  vehicleId: z.string().uuid(),
                  plate: z.string(),
                  type: z.enum(["CAR", "MOTORCYCLE"]),
                  brand: z.string(),
                  model: z.string(),
                  visitCount: z.number(),
                  lastVisit: z.date(),
                  totalTime: z.number(),
                })
              ),
              pagination: z.object({
                total: z.number(),
                page: z.number(),
                limit: z.number(),
                totalPages: z.number(),
              }),
            }),
          },
        },
        preHandler: authAdminMiddleware,
      },
      async (request, reply) => {
        const { establishmentId, limit, page, startDate, endDate } =
          request.query;

        const where = {
          ...(establishmentId && { establishmentId }),
          ...(startDate &&
            endDate && {
              entryTime: {
                gte: new Date(startDate),
                lte: new Date(endDate),
              },
            }),
        };

        const [parkingEntries, total] = await Promise.all([
          prisma.parkingEntry.findMany({
            where,
            include: {
              vehicle: true,
            },
            orderBy: {
              entryTime: "desc",
            },
            skip: (page - 1) * limit,
            take: limit,
          }),
          prisma.parkingEntry.count({ where }),
        ]);

        const vehicleStats = parkingEntries.reduce(
          (acc, entry) => {
            const existing = acc.find(
              (item) => item.vehicleId === entry.vehicleId
            );
            if (existing) {
              existing.visitCount += 1;
              if (entry.entryTime > existing.lastVisit) {
                existing.lastVisit = entry.entryTime;
              }
              if (entry.exitTime) {
                existing.totalTime +=
                  entry.exitTime.getTime() - entry.entryTime.getTime();
              }
            } else {
              acc.push({
                vehicleId: entry.vehicleId,
                plate: entry.vehicle.plate,
                type: entry.vehicle.type,
                brand: entry.vehicle.brand,
                model: entry.vehicle.model,
                visitCount: 1,
                lastVisit: entry.entryTime,
                totalTime: entry.exitTime
                  ? entry.exitTime.getTime() - entry.entryTime.getTime()
                  : 0,
              });
            }
            return acc;
          },
          [] as Array<{
            vehicleId: string;
            plate: string;
            type: "CAR" | "MOTORCYCLE";
            brand: string;
            model: string;
            visitCount: number;
            lastVisit: Date;
            totalTime: number;
          }>
        );

        // Ordena por número de visitas
        const frequentVehicles = vehicleStats.sort(
          (a, b) => b.visitCount - a.visitCount
        );

        return reply.status(200).send({
          data: frequentVehicles,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        });
      }
    );

    // Relatório de carros mais frequentes por estabelecimento
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/frequent-cars/:establishmentId",
      {
        schema: {
          summary: "Relatório de carros mais frequentes por estabelecimento",
          tags: ["Reports"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            establishmentId: z.string().uuid(),
          }),
          querystring: z.object({
            limit: z.number().min(1).max(100).default(10),
            page: z.number().min(1).default(1),
            startDate: z.string().datetime().optional(),
            endDate: z.string().datetime().optional(),
          }),
          response: {
            200: z.object({
              data: z.array(
                z.object({
                  vehicleId: z.string().uuid(),
                  plate: z.string(),
                  brand: z.string(),
                  model: z.string(),
                  color: z.string(),
                  visitCount: z.number(),
                  lastVisit: z.date(),
                  totalTime: z.object({
                    hours: z.number(),
                    minutes: z.number(),
                    formatted: z.string(),
                  }),
                  totalSpent: z.number(),
                  formattedTotalSpent: z.string(),
                })
              ),
              pagination: z.object({
                total: z.number(),
                page: z.number(),
                limit: z.number(),
                totalPages: z.number(),
              }),
            }),
            404: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authAdminMiddleware,
      },
      async (request, reply) => {
        const { establishmentId } = request.params;
        const { limit, page, startDate, endDate } = request.query;

        // Verifica se o estabelecimento existe
        const establishment = await prisma.establishment.findUnique({
          where: { id: establishmentId },
        });

        if (!establishment) {
          return reply.status(404).send({
            message: "Estabelecimento não encontrado",
          });
        }

        const where = {
          establishmentId,
          vehicle: {
            type: "CAR",
          },
          ...(startDate &&
            endDate && {
              entryTime: {
                gte: new Date(startDate),
                lte: new Date(endDate),
              },
            }),
        };

        const [parkingEntries, total] = await Promise.all([
          prisma.parkingEntry.findMany({
            where,
            include: {
              vehicle: true,
            },
            orderBy: {
              entryTime: "desc",
            },
            skip: (page - 1) * limit,
            take: limit,
          }),
          prisma.parkingEntry.count({ where }),
        ]);

        const carStats = parkingEntries.reduce(
          (acc, entry) => {
            const existing = acc.find(
              (item) => item.vehicleId === entry.vehicleId
            );
            if (existing) {
              existing.visitCount += 1;
              if (entry.entryTime > existing.lastVisit) {
                existing.lastVisit = entry.entryTime;
              }
              if (entry.exitTime) {
                const duration =
                  entry.exitTime.getTime() - entry.entryTime.getTime();
                existing.totalTime += duration;
                existing.totalSpent +=
                  (duration / (1000 * 60 * 60)) * RATES.CAR;
              }
            } else {
              acc.push({
                vehicleId: entry.vehicleId,
                plate: entry.vehicle.plate,
                brand: entry.vehicle.brand,
                model: entry.vehicle.model,
                color: entry.vehicle.color,
                visitCount: 1,
                lastVisit: entry.entryTime,
                totalTime: entry.exitTime
                  ? entry.exitTime.getTime() - entry.entryTime.getTime()
                  : 0,
                totalSpent: entry.exitTime
                  ? ((entry.exitTime.getTime() - entry.entryTime.getTime()) /
                      (1000 * 60 * 60)) *
                    RATES.CAR
                  : 0,
              });
            }
            return acc;
          },
          [] as Array<{
            vehicleId: string;
            plate: string;
            brand: string;
            model: string;
            color: string;
            visitCount: number;
            lastVisit: Date;
            totalTime: number;
            totalSpent: number;
          }>
        );

        // Ordena por número de visitas e formata os dados
        const frequentCars = carStats
          .sort((a, b) => b.visitCount - a.visitCount)
          .map((car) => ({
            ...car,
            totalTime: formatDuration(car.totalTime),
            formattedTotalSpent: formatCurrency(car.totalSpent),
          }));

        return reply.status(200).send({
          data: frequentCars,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        });
      }
    );
  };
}
