import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/AuthService";

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");
    const authService = new AuthService(request.server as FastifyInstance);
    const decoded = await authService.validateToken(token);

    request.user = decoded;
    done();
  } catch (error) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}
