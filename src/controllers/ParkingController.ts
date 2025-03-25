import { FastifyPluginAsync } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { PrismaClient } from "../lib/prisma_client";
import { authMiddleware } from "../middlewares/authMiddleware";

const prisma = new PrismaClient();

export class ParkingController {
  constructor() {}

  register: FastifyPluginAsync = async (fastify) => {
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/",
      {
        schema: {
          summary: "Listar todos os registros de estacionamento com filtros",
          tags: ["Parking"],
          security: [{ bearerAuth: [] }],
          querystring: z.object({
            vehicleType: z.enum(["CAR", "MOTORCYCLE"]).optional(),
            establishmentId: z.string().uuid().optional(),
            startDate: z.string().datetime().optional(),
            endDate: z.string().datetime().optional(),
            isParked: z
              .union([
                z.boolean(),
                z.string().transform((val) => val === "true"),
              ])
              .optional(),
            orderBy: z.enum(["entryTime", "exitTime", "createdAt"]).optional(),
            orderDirection: z.enum(["asc", "desc"]).optional(),
            plate: z
              .string()
              .regex(/^[A-Z]{2,3}-[0-9]{2}-[0-9]{2}(?:-[A-Z]{2})?$/i)
              .optional(),
          }),
          response: {
            200: z.array(
              z.object({
                id: z.string().uuid(),
                vehicleId: z.string().uuid(),
                establishmentId: z.string().uuid(),
                entryTime: z.date(),
                exitTime: z.date().nullable(),
                createdAt: z.date(),
                updatedAt: z.date(),
                vehicle: z.object({
                  id: z.string().uuid(),
                  plate: z.string(),
                  type: z.enum(["CAR", "MOTORCYCLE"]),
                  brand: z.string(),
                  model: z.string(),
                  color: z.string(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
                }),
                establishment: z.object({
                  id: z.string().uuid(),
                  name: z.string(),
                  address: z.string(),
                  phone: z.string(),
                  motorcycleSlots: z.number(),
                  carSlots: z.number(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
                }),
              })
            ),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const {
          vehicleType,
          establishmentId,
          startDate,
          endDate,
          isParked,
          orderBy = "createdAt",
          orderDirection = "desc",
          plate,
        } = request.query;

        const where: any = {};

        if (vehicleType) {
          where.vehicle = {
            type: vehicleType,
          };
        }

        if (plate) {
          where.vehicle = {
            ...where.vehicle,
            plate: {
              contains: plate,
              mode: "insensitive",
            },
          };
        }

        if (establishmentId) {
          where.establishmentId = establishmentId;
        }

        if (startDate || endDate) {
          where.entryTime = {};
          if (startDate) {
            where.entryTime.gte = new Date(startDate);
          }
          if (endDate) {
            where.entryTime.lte = new Date(endDate);
          }
        }

        if (isParked !== undefined) {
          where.exitTime = isParked ? null : { not: null };
        }

        const parkings = await prisma.parkingEntry.findMany({
          where,
          include: {
            vehicle: true,
            establishment: true,
          },
          orderBy: {
            [orderBy]: orderDirection,
          },
        });

        return reply.status(200).send(parkings);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/:id",
      {
        schema: {
          summary: "Buscar registro de estacionamento por ID",
          tags: ["Parking"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            id: z.string().uuid(),
          }),
          response: {
            200: z.object({
              id: z.string().uuid(),
              vehicleId: z.string().uuid(),
              establishmentId: z.string().uuid(),
              entryTime: z.date(),
              exitTime: z.date().nullable(),
              createdAt: z.date(),
              updatedAt: z.date(),
              vehicle: z.object({
                id: z.string().uuid(),
                plate: z.string(),
                type: z.enum(["CAR", "MOTORCYCLE"]),
                brand: z.string(),
                model: z.string(),
                color: z.string(),
                createdAt: z.date(),
                updatedAt: z.date(),
              }),
              establishment: z.object({
                id: z.string().uuid(),
                name: z.string(),
                address: z.string(),
                phone: z.string(),
                motorcycleSlots: z.number(),
                carSlots: z.number(),
                createdAt: z.date(),
                updatedAt: z.date(),
              }),
            }),
            404: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const { id } = request.params;

        const parking = await prisma.parkingEntry.findUnique({
          where: { id },
          include: {
            vehicle: true,
            establishment: true,
          },
        });

        if (!parking) {
          return reply.status(404).send({
            message: "Registro de estacionamento não encontrado",
          });
        }

        return reply.status(200).send(parking);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/establishment/:establishmentId/parked",
      {
        schema: {
          summary: "Listar veículos estacionados em um estabelecimento",
          tags: ["Parking"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            establishmentId: z.string().uuid(),
          }),
          querystring: z.object({
            vehicleType: z.enum(["CAR", "MOTORCYCLE"]).optional(),
            orderBy: z.enum(["entryTime", "plate"]).optional(),
            orderDirection: z.enum(["asc", "desc"]).optional(),
            plate: z
              .string()
              .regex(/^[A-Z]{2,3}-[0-9]{2}-[0-9]{2}(?:-[A-Z]{2})?$/i)
              .optional(),
          }),
          response: {
            200: z.array(
              z.object({
                id: z.string().uuid(),
                vehicleId: z.string().uuid(),
                entryTime: z.date(),
                vehicle: z.object({
                  id: z.string().uuid(),
                  plate: z.string(),
                  type: z.enum(["CAR", "MOTORCYCLE"]),
                  brand: z.string(),
                  model: z.string(),
                  color: z.string(),
                }),
              })
            ),
            404: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const { establishmentId } = request.params;
        const {
          vehicleType,
          orderBy = "entryTime",
          orderDirection = "desc",
          plate,
        } = request.query;

        const establishment = await prisma.establishment.findUnique({
          where: { id: establishmentId },
        });

        if (!establishment) {
          return reply.status(404).send({
            message: "Estabelecimento não encontrado",
          });
        }

        const where: any = {
          establishmentId,
          exitTime: null,
        };

        if (vehicleType) {
          where.vehicle = {
            type: vehicleType,
          };
        }

        if (plate) {
          where.vehicle = {
            ...where.vehicle,
            plate: {
              contains: plate,
              mode: "insensitive",
            },
          };
        }

        const parkings = await prisma.parkingEntry.findMany({
          where,
          include: {
            vehicle: true,
          },
          orderBy: {
            [orderBy]: orderDirection,
          },
        });

        return reply.status(200).send(parkings);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/entry",
      {
        schema: {
          summary: "Registrar entrada de veículo no estacionamento",
          tags: ["Parking"],
          security: [{ bearerAuth: [] }],
          body: z.object({
            plate: z
              .string()
              .regex(
                /^[A-Z]{2,3}-[0-9]{2}-[0-9]{2}(?:-[A-Z]{2})?$/i,
                "A placa deve seguir o formato AAA-99-99 ou AAA-99-99-AA (exemplo: ABC-12-34 ou ABC-12-34-DE)"
              )
              .describe(
                "Placa do veículo no formato AAA-99-99 ou AAA-99-99-AA"
              ),
            establishmentId: z
              .string()
              .uuid("ID do estabelecimento inválido")
              .describe("ID do estabelecimento"),
            entryDate: z
              .string()
              .datetime(
                "Data de entrada inválida. Use o formato ISO 8601 (exemplo: 2024-03-20T10:00:00Z)"
              )
              .describe("Data e hora de entrada no formato ISO 8601"),
            exitDate: z
              .string()
              .datetime(
                "Data de saída inválida. Use o formato ISO 8601 (exemplo: 2024-03-20T10:00:00Z)"
              )
              .optional()
              .describe("Data e hora de saída no formato ISO 8601 (opcional)"),
          }),
          response: {
            201: z.object({
              id: z.string().uuid(),
              vehicleId: z.string().uuid(),
              establishmentId: z.string().uuid(),
              entryTime: z.date(),
              exitTime: z.date().nullable(),
              isParked: z.boolean(),
            }),
            400: z.object({
              message: z.string(),
            }),
            404: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const { plate, establishmentId, entryDate, exitDate } = request.body;

        // Verifica se o veículo existe
        const vehicle = await prisma.vehicle.findUnique({
          where: { plate },
        });

        if (!vehicle) {
          return reply.status(404).send({
            message:
              "Veículo não encontrado. Use a rota /entry-with-registration para cadastrar e registrar entrada.",
          });
        }

        // Verifica se o estabelecimento existe
        const establishment = await prisma.establishment.findUnique({
          where: { id: establishmentId },
        });

        if (!establishment) {
          return reply.status(404).send({
            message: "Estabelecimento não encontrado",
          });
        }

        // Verifica se já existe um veículo com a mesma placa no estabelecimento
        const existingEntry = await prisma.parkingEntry.findFirst({
          where: {
            vehicleId: vehicle.id,
            establishmentId,
            exitTime: null,
          },
        });

        if (existingEntry) {
          return reply.status(400).send({
            message: "Veículo já está estacionado neste estabelecimento",
          });
        }

        // Verifica disponibilidade de vagas
        const occupiedSlots = await prisma.parkingEntry.count({
          where: {
            establishmentId,
            vehicle: {
              type: vehicle.type,
            },
            exitTime: null,
          },
        });

        const availableSlots =
          vehicle.type === "CAR"
            ? establishment.carSlots
            : establishment.motorcycleSlots;

        if (occupiedSlots >= availableSlots) {
          return reply.status(400).send({
            message: `Não há vagas disponíveis para ${
              vehicle.type === "CAR" ? "carros" : "motos"
            }`,
          });
        }

        // Valida datas
        const entryDateTime = new Date(entryDate);
        const exitDateTime = exitDate ? new Date(exitDate) : null;

        if (exitDateTime && entryDateTime >= exitDateTime) {
          return reply.status(400).send({
            message: "A data de entrada deve ser anterior à data de saída",
          });
        }

        const parkingEntry = await prisma.parkingEntry.create({
          data: {
            vehicleId: vehicle.id,
            establishmentId,
            entryTime: entryDateTime,
            exitTime: exitDateTime,
            isParked: exitDateTime ? false : true,
          },
        });

        return reply.status(201).send(parkingEntry);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/entry-with-registration",
      {
        schema: {
          summary:
            "Cadastrar veículo e registrar entrada no estacionamento em uma única operação",
          tags: ["Parking"],
          security: [{ bearerAuth: [] }],
          body: z.object({
            // Dados do veículo
            plate: z
              .string()
              .regex(
                /^[A-Z]{2,3}-[0-9]{2}-[0-9]{2}(?:-[A-Z]{2})?$/i,
                "A placa deve seguir o formato AAA-99-99 ou AAA-99-99-AA (exemplo: ABC-12-34 ou ABC-12-34-DE)"
              )
              .describe(
                "Placa do veículo no formato AAA-99-99 ou AAA-99-99-AA"
              ),
            type: z
              .enum(["CAR", "MOTORCYCLE"])
              .describe("Tipo do veículo (CAR ou MOTORCYCLE)"),
            brand: z
              .string()
              .min(1, "A marca é obrigatória")
              .describe("Marca do veículo"),
            model: z
              .string()
              .min(1, "O modelo é obrigatório")
              .describe("Modelo do veículo"),
            color: z
              .string()
              .min(1, "A cor é obrigatória")
              .describe("Cor do veículo"),
            // Dados do estacionamento
            establishmentId: z
              .string()
              .uuid("ID do estabelecimento inválido")
              .describe("ID do estabelecimento"),
            entryDate: z
              .string()
              .datetime(
                "Data de entrada inválida. Use o formato ISO 8601 (exemplo: 2024-03-20T10:00:00Z)"
              )
              .describe("Data e hora de entrada no formato ISO 8601"),
            exitDate: z
              .string()
              .datetime(
                "Data de saída inválida. Use o formato ISO 8601 (exemplo: 2024-03-20T10:00:00Z)"
              )
              .optional()
              .describe("Data e hora de saída no formato ISO 8601 (opcional)"),
          }),
          response: {
            201: z.object({
              vehicle: z.object({
                id: z.string().uuid(),
                plate: z.string(),
                type: z.enum(["CAR", "MOTORCYCLE"]),
                brand: z.string(),
                model: z.string(),
                color: z.string(),
              }),
              parkingEntry: z.object({
                id: z.string().uuid(),
                entryTime: z.date(),
                exitTime: z.date().nullable(),
                isParked: z.boolean(),
              }),
            }),
            400: z.object({
              message: z.string(),
            }),
            404: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const {
          plate,
          type,
          brand,
          model,
          color,
          establishmentId,
          entryDate,
          exitDate,
        } = request.body;

        // Verifica se o veículo já existe
        const existingVehicle = await prisma.vehicle.findUnique({
          where: { plate },
        });

        if (existingVehicle) {
          return reply.status(400).send({
            message: "Já existe um veículo cadastrado com esta placa",
          });
        }

        // Verifica se o estabelecimento existe
        const establishment = await prisma.establishment.findUnique({
          where: { id: establishmentId },
        });

        if (!establishment) {
          return reply.status(404).send({
            message: "Estabelecimento não encontrado",
          });
        }

        // Verifica disponibilidade de vagas
        const occupiedSlots = await prisma.parkingEntry.count({
          where: {
            establishmentId,
            vehicle: {
              type,
            },
            exitTime: null,
          },
        });

        const availableSlots =
          type === "CAR"
            ? establishment.carSlots
            : establishment.motorcycleSlots;

        if (occupiedSlots >= availableSlots) {
          return reply.status(400).send({
            message: `Não há vagas disponíveis para ${
              type === "CAR" ? "carros" : "motos"
            }`,
          });
        }

        // Valida datas
        const entryDateTime = new Date(entryDate);
        const exitDateTime = exitDate ? new Date(exitDate) : null;

        if (exitDateTime && entryDateTime >= exitDateTime) {
          return reply.status(400).send({
            message: "A data de entrada deve ser anterior à data de saída",
          });
        }

        // Executa a transação
        const result = await prisma.$transaction(async (tx) => {
          // 1. Cria o veículo
          const vehicle = await tx.vehicle.create({
            data: {
              plate,
              type,
              brand,
              model,
              color,
            },
          });

          // 2. Registra a entrada no estacionamento
          const parkingEntry = await tx.parkingEntry.create({
            data: {
              vehicleId: vehicle.id,
              establishmentId,
              entryTime: entryDateTime,
              exitTime: exitDateTime,
              isParked: exitDateTime ? false : true,
            },
          });

          return {
            vehicle,
            parkingEntry,
          };
        });

        return reply.status(201).send(result);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().put(
      "/:id/exit",
      {
        schema: {
          summary: "Registrar saída de veículo do estacionamento",
          tags: ["Parking"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            id: z.string().uuid(),
          }),
          body: z.object({
            exitDate: z
              .string()
              .datetime(
                "Data de saída inválida. Use o formato ISO 8601 (exemplo: 2024-03-20T10:00:00Z)"
              )
              .describe("Data e hora de saída no formato ISO 8601"),
          }),
          response: {
            200: z.object({
              id: z.string().uuid(),
              vehicleId: z.string().uuid(),
              establishmentId: z.string().uuid(),
              entryTime: z.date(),
              exitTime: z.date(),
            }),
            400: z.object({
              message: z.string(),
            }),
            404: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const { id } = request.params;
        const { exitDate } = request.body;

        const parkingEntry = await prisma.parkingEntry.findUnique({
          where: { id },
          include: {
            vehicle: true,
            establishment: true,
          },
        });

        if (!parkingEntry) {
          return reply.status(404).send({
            message: "Registro de estacionamento não encontrado",
          });
        }

        if (parkingEntry.exitTime) {
          return reply.status(400).send({
            message: "Veículo já possui registro de saída",
          });
        }

        const exitDateTime = new Date(exitDate);
        if (parkingEntry.entryTime >= exitDateTime) {
          return reply.status(400).send({
            message: "A data de saída deve ser posterior à data de entrada",
          });
        }

        const updatedEntry = await prisma.parkingEntry.update({
          where: { id },
          data: {
            exitTime: exitDateTime,
            isParked: false,
          },
          include: {
            vehicle: true,
            establishment: true,
          },
        });

        const response = {
          id: updatedEntry.id,
          vehicleId: updatedEntry.vehicleId,
          establishmentId: updatedEntry.establishmentId,
          entryTime: updatedEntry.entryTime,
          exitTime: updatedEntry.exitTime as Date,
        };

        return reply.status(200).send(response);
      }
    );
  };
}
