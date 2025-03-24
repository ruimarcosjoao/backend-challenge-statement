import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import swagger from "@fastify/swagger";
import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { env } from "../services/env-config-service";
const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
        colorize: true,
        levelFirst: true,
        singleLine: true,
      },
      level: "debug",
    },
  },
});

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

fastify.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

fastify.register(swagger, {
  openapi: {
    info: {
      title: "API de Gerenciamento de Estacionamento",
      description:
        "API para gerenciar um estacionamento de carros e motos, incluindo cadastro de estabelecimentos, veículos e controle de entrada/saída",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
});

fastify.register(import("@scalar/fastify-api-reference"), {
  routePrefix: "/reference",
  logLevel: "silent",
  configuration: {
    theme: "moon",
  },
});

fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(
    {
      error: {
        message: error.message,
        stack: error.stack,
        code: error.code,
      },
      request: {
        url: request.url,
        method: request.method,
        headers: request.headers,
      },
    },
    "Error handling request"
  );

  reply.status(error.statusCode || 500).send({
    message: "Internal server error",
  });
});

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.listen({ port: env.PORT }, () => {
  console.log("HTTP Server Running!");
});
