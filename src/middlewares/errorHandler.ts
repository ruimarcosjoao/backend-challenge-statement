import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export async function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Log do erro para debug
  request.log.error(error);

  // Erro de validação do Fastify/Zod
  if (error.validation) {
    const validationErrors = error.validation.map((err: any) => ({
      field: err.instancePath.replace("/", ""),
      message: err.message,
    }));

    return reply.status(400).send({
      message: "Erro de validação",
      errors: validationErrors,
    });
  }

  // Erro de validação do Zod
  if (error instanceof ZodError) {
    const errors = error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    return reply.status(400).send({
      message: "Erro de validação",
      errors,
    });
  }

  // Erros do Prisma
  if (error.name === "PrismaClientKnownRequestError") {
    // Erro de violação de chave única
    if (error.code === "P2002") {
      const field = (error as any).meta?.target?.[0];
      return reply.status(400).send({
        message: `Já existe um registro com este ${field}`,
      });
    }

    // Erro de registro não encontrado
    if (error.code === "P2025") {
      return reply.status(404).send({
        message: "Registro não encontrado",
      });
    }

    // Erro de violação de chave estrangeira
    if (error.code === "P2003") {
      return reply.status(400).send({
        message: "Referência inválida para um registro relacionado",
      });
    }
  }

  // Erro de conexão com o banco de dados
  if (error.name === "PrismaClientConnectionError") {
    return reply.status(500).send({
      message: "Erro ao conectar com o banco de dados",
    });
  }

  // Erro de formato de data inválido
  if (error.message?.includes("Invalid Date")) {
    return reply.status(400).send({
      message:
        "Formato de data inválido. Use o formato ISO 8601 (exemplo: 2024-03-20T10:00:00Z)",
    });
  }

  // Erro padrão
  return reply.status(500).send({
    message: "Erro interno do servidor",
  });
}
