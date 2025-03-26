import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifySwagger from "@fastify/swagger";
import Fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { env } from "../../config/env";
import { AuthController } from "../../controllers/AuthController";
import { EstablishmentController } from "../../controllers/EstablishementController";
import { ParkingController } from "../../controllers/ParkingController";
import { ReportController } from "../../controllers/ReportController";
import { VehicleController } from "../../controllers/VehicleController";
import { errorHandler } from "../../middlewares/errorHandler";

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

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: "API de Gerenciamento de Estacionamento",
      description:
        "API para gerenciar um estacionamento de carros e motos, incluindo cadastro de estabelecimentos, veículos e controle de entrada/saída",
      version: "1.0.0",
    },
    tags: [{ name: "Auth", description: "Rota para autenticacao do usaurio" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  transform: jsonSchemaTransform,
});

fastify.register(import("@scalar/fastify-api-reference"), {
  routePrefix: "/reference",
  logLevel: "silent",
  configuration: {
    metaData: {
      title: "API de Gerenciamento de Estacionamento",
      description:
        "API para gerenciar um estacionamento de carros e motos, incluindo cadastro de estabelecimentos, veículos e controle de entrada/saída",
      ogDescription: "Statement Challenge",
      ogTitle: "Statement Challenge",
      twitterCard: "summary_large_image",
    },
    spec: {
      content: () => fastify.swagger(),
    },
  },
});

// Registra o handler de erro
fastify.setErrorHandler(errorHandler);

const establishmentController = new EstablishmentController();
fastify.register(establishmentController.register, {
  prefix: "/establishment",
});
const vehicleController = new VehicleController();
fastify.register(vehicleController.register, { prefix: "/vehicle" });
const parkingController = new ParkingController();
fastify.register(parkingController.register, { prefix: "/parking" });
const reportController = new ReportController();
fastify.register(reportController.register, { prefix: "/reports" });
const authController = new AuthController(fastify);
fastify.register(authController.register, { prefix: "/auth" });

fastify.listen({ port: env.PORT }, () => {
  console.log("HTTP Server Running!");
});
