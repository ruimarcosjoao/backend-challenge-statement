import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { Role } from "../entites/value-objects/UserValueObjects";
import { AuthService } from "../services/AuthService";
import { LoginDTO, RegisterDTO } from "../types/auth";

export class AuthController {
  private authService: AuthService;

  constructor(private app: FastifyInstance) {
    this.authService = new AuthService(app);
  }

  register: FastifyPluginAsync = async (fastify) => {
    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/login",
      {
        schema: {
          summary: "Login",
          description: "Login de usuário",
          tags: ["Auth"],
          body: z.object({
            email: z.string().email(),
            password: z.string().min(8),
          }),
          response: {
            200: z.object({
              token: z.string(),
              user: z.object({
                id: z.string().uuid(),
                email: z.string().email(),
                name: z.string(),
                role: z.nativeEnum(Role),
              }),
            }),
            401: z.object({
              message: z.string(),
            }),
          },
        },
      },
      async (request, reply) => {
        try {
          const loginDTO = request.body as LoginDTO;
          const result = await this.authService.login(loginDTO);
          return reply.code(200).send({
            token: result.token,
            user: {
              id: result.user.id,
              email: result.user.email,
              name: result.user.fullName,
              role: result.user.role,
            },
          });
        } catch (error) {
          return reply.status(401).send({
            message:
              error instanceof Error ? error.message : "Erro ao fazer login",
          });
        }
      }
    );
    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/register",
      {
        schema: {
          summary: "Register",
          description: "Register de usuário",
          tags: ["Auth"],
          body: z.object({
            email: z.string().email(),
            password: z.string().min(8),
            fullName: z.string(),
          }),
          response: {
            200: z.object({
              token: z.string(),
              user: z.object({
                id: z.string().uuid(),
                email: z.string().email(),
                name: z.string(),
                role: z.nativeEnum(Role),
              }),
            }),
            401: z.object({
              message: z.string(),
            }),
          },
        },
      },
      async (request, reply) => {
        try {
          const registerDTO = request.body as RegisterDTO;
          const result = await this.authService.register(registerDTO);
          return reply.code(200).send({
            token: result.token,
            user: {
              id: result.user.id,
              email: result.user.email,
              name: result.user.fullName,
              role: result.user.role,
            },
          });
        } catch (error) {
          return reply.status(401).send({
            message:
              error instanceof Error ? error.message : "Erro ao fazer login",
          });
        }
      }
    );
  };
}
