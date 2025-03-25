import { z } from "zod";
const envSchema = z.object({
  PORT: z.coerce.number(),
  JWT_SECRET: z.string(),
  DATABASE_URL: z.string().startsWith("postgres"),
});
export const env = envSchema.parse(process.env);
