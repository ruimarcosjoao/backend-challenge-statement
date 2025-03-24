import { Establishment as PrismaEstablishment } from "@prisma/client";
import { Establishment } from "../../entites/Establishment";
import {
  Address,
  Phone,
} from "../../entites/value-objects/EstablishmentValueObjects";
import { IEstablishmentRepository } from "../EstablishmentRepository";
import { PrismaRepository } from "./PrismaRepository";

export class PrismaEstablishmentRepository
  extends PrismaRepository<Establishment>
  implements IEstablishmentRepository
{
  async create(establishment: Establishment): Promise<Establishment> {
    const prismaEstablishment = await this.prisma.establishment.create({
      data: {
        name: establishment.name,
        address: establishment.address.toString(),
        phone: establishment.phone.toString(),
        motorcycleSlots: establishment.motorcycleSlots.toString(),
        carSlots: establishment.carSlots.toString(),
      },
    });

    return this.toDomain(prismaEstablishment);
  }

  async findById(id: string): Promise<Establishment | null> {
    const prismaEstablishment = await this.prisma.establishment.findUnique({
      where: { id },
    });

    return prismaEstablishment ? this.toDomain(prismaEstablishment) : null;
  }

  async findAll(): Promise<Establishment[]> {
    const prismaEstablishments = await this.prisma.establishment.findMany();
    return prismaEstablishments.map((establishment) =>
      this.toDomain(establishment)
    );
  }

  async update(
    id: string,
    establishment: Partial<Establishment>
  ): Promise<Establishment> {
    const prismaEstablishment = await this.prisma.establishment.update({
      where: { id },
      data: {
        name: establishment.name,
        address: establishment.address?.toString(),
        phone: establishment.phone?.toString(),
        motorcycleSlots: establishment.motorcycleSlots?.toString(),
        carSlots: establishment.carSlots?.toString(),
      },
    });

    return this.toDomain(prismaEstablishment);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.establishment.delete({
      where: { id },
    });
  }

  async findByName(name: string): Promise<Establishment[]> {
    const prismaEstablishments = await this.prisma.establishment.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    return prismaEstablishments.map((establishment) =>
      this.toDomain(establishment)
    );
  }

  async findByAddress(address: Address): Promise<Establishment[]> {
    const prismaEstablishments = await this.prisma.establishment.findMany({
      where: { address: address.toString() },
    });
    return prismaEstablishments.map((establishment) =>
      this.toDomain(establishment)
    );
  }

  async findByPhone(phone: Phone): Promise<Establishment | null> {
    const prismaEstablishment = await this.prisma.establishment.findUnique({
      where: { phone: phone.toString() },
    });

    return prismaEstablishment ? this.toDomain(prismaEstablishment) : null;
  }

  private toDomain(prismaEstablishment: PrismaEstablishment): Establishment {
    return new Establishment(
      prismaEstablishment.name,
      prismaEstablishment.address,
      prismaEstablishment.phone,
      parseInt(prismaEstablishment.motorcycleSlots),
      parseInt(prismaEstablishment.carSlots)
    );
  }
}
