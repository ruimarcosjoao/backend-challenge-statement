import { PrismaClient } from "@prisma/client";
import { IRepository } from "../IRepository";

export abstract class PrismaRepository<T> implements IRepository<T> {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  abstract create(entity: T): Promise<T>;
  abstract findById(id: string): Promise<T | null>;
  abstract findAll(): Promise<T[]>;
  abstract update(id: string, entity: Partial<T>): Promise<T>;
  abstract delete(id: string): Promise<void>;

  protected async disconnect() {
    await this.prisma.$disconnect();
  }
}
