import { FastifyPluginAsync } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { PrismaClient } from "../lib/prisma_client";
import { authMiddleware } from "../middlewares/authMiddleware";
const prisma = new PrismaClient();

export class VehicleController {
  constructor() {}

  register: FastifyPluginAsync = async (fastify) => {
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/",
      {
        schema: {
          summary: "Listar todos os veículos",
          tags: ["Vehicles"],
          security: [{ bearerAuth: [] }],
          querystring: z.object({
            page: z.number().min(1).default(1),
            limit: z.number().min(1).max(100).default(10),
          }),
          response: {
            200: z.object({
              data: z.array(
                z.object({
                  id: z.string().uuid(),
                  plate: z.string(),
                  type: z.enum(["CAR", "MOTORCYCLE"]),
                  brand: z.string(),
                  model: z.string(),
                  color: z.string(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
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
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const { page, limit } = request.query;

        const [vehicles, total] = await Promise.all([
          prisma.vehicle.findMany({
            orderBy: {
              createdAt: "desc",
            },
            skip: (page - 1) * limit,
            take: limit,
          }),
          prisma.vehicle.count(),
        ]);

        return reply.status(200).send({
          data: vehicles,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        });
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/create",
      {
        schema: {
          summary: "Cadastrar novo veículo",
          tags: ["Vehicles"],
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
          }),
          response: {
            201: z.object({
              id: z.string().uuid(),
              plate: z.string(),
              type: z.enum(["CAR", "MOTORCYCLE"]),
              brand: z.string(),
              model: z.string(),
              color: z.string(),
            }),
            400: z.object({
              message: z.string(),
            }),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const { plate, type, brand, model, color } = request.body;

        const existingVehicle = await prisma.vehicle.findUnique({
          where: { plate },
        });

        if (existingVehicle) {
          return reply.status(400).send({
            message: "Já existe um veículo cadastrado com esta placa",
          });
        }

        const vehicle = await prisma.vehicle.create({
          data: {
            plate,
            type,
            brand,
            model,
            color,
          },
        });

        return reply.status(201).send(vehicle);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().put(
      "/:id",
      {
        schema: {
          summary: "Atualizar veículo",
          tags: ["Vehicles"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            id: z.string().uuid("ID do veículo inválido"),
          }),
          body: z.object({
            plate: z
              .string()
              .regex(
                /^[A-Z]{2,3}-[0-9]{2}-[0-9]{2}(?:-[A-Z]{2})?$/i,
                "A placa deve seguir o formato AAA-99-99 ou AAA-99-99-AA (exemplo: ABC-12-34 ou ABC-12-34-DE)"
              )
              .optional()
              .describe(
                "Placa do veículo no formato AAA-99-99 ou AAA-99-99-AA"
              ),
            type: z
              .enum(["CAR", "MOTORCYCLE"])
              .optional()
              .describe("Tipo do veículo (CAR ou MOTORCYCLE)"),
            brand: z
              .string()
              .min(1, "A marca é obrigatória")
              .optional()
              .describe("Marca do veículo"),
            model: z
              .string()
              .min(1, "O modelo é obrigatório")
              .optional()
              .describe("Modelo do veículo"),
            color: z
              .string()
              .min(1, "A cor é obrigatória")
              .optional()
              .describe("Cor do veículo"),
          }),
          response: {
            200: z.object({
              id: z.string().uuid(),
              plate: z.string(),
              type: z.enum(["CAR", "MOTORCYCLE"]),
              brand: z.string(),
              model: z.string(),
              color: z.string(),
              updatedAt: z.date(),
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
        const updateData = request.body;

        const vehicle = await prisma.vehicle.findUnique({
          where: { id },
        });

        if (!vehicle) {
          return reply.status(404).send({
            message: "Veículo não encontrado",
          });
        }

        if (updateData.plate && updateData.plate !== vehicle.plate) {
          const existingVehicle = await prisma.vehicle.findUnique({
            where: { plate: updateData.plate },
          });

          if (existingVehicle) {
            return reply.status(400).send({
              message: "Já existe um veículo cadastrado com esta placa",
            });
          }
        }

        const updatedVehicle = await prisma.vehicle.update({
          where: { id },
          data: updateData,
        });

        return reply.status(200).send(updatedVehicle);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().delete(
      "/:id",
      {
        schema: {
          summary: "Deletar veículo",
          tags: ["Vehicles"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            id: z.string().uuid("ID do veículo inválido"),
          }),
          response: {
            204: z.null(),
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

        // Verifica se o veículo existe
        const vehicle = await prisma.vehicle.findUnique({
          where: { id },
          include: {
            ParkingEntry: {
              where: {
                exitTime: null,
              },
            },
          },
        });

        if (!vehicle) {
          return reply.status(404).send({
            message: "Veículo não encontrado",
          });
        }

        if (vehicle.ParkingEntry.length > 0) {
          return reply.status(400).send({
            message: "Não é possível deletar um veículo que está estacionado",
          });
        }

        await prisma.vehicle.delete({
          where: { id },
        });

        return reply.status(204).send();
      }
    );
  };
}
