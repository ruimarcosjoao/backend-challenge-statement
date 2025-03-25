import { FastifyPluginAsync } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { PrismaClient } from "../lib/prisma_client";
import { authMiddleware } from "../middlewares/authMiddleware";
const prisma = new PrismaClient();

export class EstablishmentController {
  constructor() {}

  register: FastifyPluginAsync = async (fastify) => {
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/",
      {
        schema: {
          summary: "Listar todos os estabelecimentos",
          tags: ["Establishments"],
          security: [{ bearerAuth: [] }],
          response: {
            200: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                address: z.string(),
                phone: z.string(),
                motorcycleSlots: z.number(),
                carSlots: z.number(),
                createdAt: z.date(),
                updatedAt: z.date(),
              })
            ),
          },
        },
        preHandler: authMiddleware,
      },
      async (request, reply) => {
        const establishments = await prisma.establishment.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });

        return reply.status(200).send(establishments);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/create",
      {
        schema: {
          summary: "Create establishments",
          tags: ["Establishments"],
          security: [{ bearerAuth: [] }],
          body: z.object({
            name: z
              .string()
              .min(1, "O nome é obrigatório")
              .describe("Nome do estabelecimento"),
            address: z
              .string()
              .min(1, "O endereço é obrigatório")
              .describe("Endereço completo do estabelecimento"),
            phone: z
              .string()
              .regex(
                /^\+\d{11}$/,
                "O telefone deve seguir o padrão +24494732154"
              )
              .describe("Número de telefone no formato +24494732154"),
            motorcycleSlots: z
              .number()
              .min(1, "O número de vagas para motos deve ser maior que 0")
              .describe("Quantidade de vagas para motos"),
            carSlots: z
              .number()
              .min(1, "O número de vagas para carros deve ser maior que 0")
              .describe("Quantidade de vagas para carros"),
          }),
          response: {
            201: z.object({
              id: z.string().uuid(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { name, address, phone, motorcycleSlots, carSlots } =
          request.body;

        const existingEstablishment = await prisma.establishment.findFirst({
          where: {
            name,
          },
        });

        if (existingEstablishment) {
          return reply.status(200).send({
            id: existingEstablishment.id,
          });
        }

        const establishment = await prisma.establishment.create({
          data: {
            name,
            address,
            phone,
            motorcycleSlots,
            carSlots,
          },
        });
        return reply.status(201).send({
          id: establishment.id,
        });
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().put(
      "/:id",
      {
        schema: {
          summary: "Atualizar estabelecimento",
          tags: ["Establishments"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            id: z.string().uuid(),
          }),
          body: z.object({
            name: z.string().optional(),
            address: z.string().optional(),
            phone: z.string().optional(),
            motorcycleSlots: z.number().optional(),
            carSlots: z.number().optional(),
          }),
          response: {
            200: z.object({
              id: z.string().uuid(),
              name: z.string(),
              address: z.string(),
              phone: z.string(),
              motorcycleSlots: z.number(),
              carSlots: z.number(),
            }),
            404: z.object({
              message: z.string(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { id } = request.params;
        const updateData = request.body;

        const establishment = await prisma.establishment.findUnique({
          where: { id },
        });

        if (!establishment) {
          return reply.status(404).send({
            message: "Estabelecimento não encontrado",
          });
        }

        const updatedEstablishment = await prisma.establishment.update({
          where: { id },
          data: updateData,
        });

        return reply.status(200).send(updatedEstablishment);
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().delete(
      "/:id",
      {
        schema: {
          summary: "Remover estabelecimento",
          tags: ["Establishments"],
          security: [{ bearerAuth: [] }],
          params: z.object({
            id: z.string().uuid(),
          }),
          response: {
            204: z.null(),
            404: z.object({
              message: z.string(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { id } = request.params;

        const establishment = await prisma.establishment.findUnique({
          where: { id },
        });

        if (!establishment) {
          return reply.status(404).send({
            message: "Estabelecimento não encontrado",
          });
        }

        await prisma.establishment.delete({
          where: { id },
        });

        return reply.status(204).send();
      }
    );
  };
}
