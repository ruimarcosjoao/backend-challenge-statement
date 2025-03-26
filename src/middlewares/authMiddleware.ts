import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "../lib/prisma_client";

const prisma = new PrismaClient();

interface JwtUser {
  id: string;
  email: string;
  role?: string;
}

declare module "fastify" {
  interface FastifyRequest {
    user: JwtUser;
  }
}

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const userId = request.user.id;
    console.log(userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return reply.status(401).send({
        message: "Usuário não encontrado",
      });
    }

    request.user = {
      ...request.user,
      role: user.role,
    };
  } catch (error) {
    return reply.status(401).send({
      message: "Token inválido ou não fornecido",
    });
  }
}
export async function authAdminMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();

    const userId = request.user.id;
    console.log(userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return reply.status(401).send({
        message: "Usuário não encontrado",
      });
    }

    if (user.role !== "ADMIN") {
      return reply.status(403).send({
        message:
          "Acesso negado. Apenas administradores podem realizar esta operação.",
      });
    }

    request.user = {
      ...request.user,
      role: user.role,
    };
  } catch (error) {
    return reply.status(401).send({
      message: "Token inválido ou não fornecido",
    });
  }
}
