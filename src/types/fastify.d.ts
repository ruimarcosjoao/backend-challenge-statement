import "fastify";

declare module "fastify" {
  interface FastifyRequest {
    user: {
      id: string;
      email: string;
      role: string;
      iat: number;
      exp: number;
    };
    getCurrentUserId(): Promise<string>;
    getCurrentUser(): Promise<{
      id: string;
      role: string;
    }>;
    verifyAdmin(): Promise<{
      id: string;
      role: string;
    }>;
  }
}
