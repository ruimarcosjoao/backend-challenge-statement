import { Vehicle as PrismaVehicle } from "@prisma/client";
import { Vehicle } from "../../entites/Vehicle";
import {
  Plate,
  VehicleType,
} from "../../entites/value-objects/VehicleValueObjects";
import { IVehicleRepository } from "../VehicleRepository";
import { PrismaRepository } from "./PrismaRepository";

export class PrismaVehicleRepository
  extends PrismaRepository<Vehicle>
  implements IVehicleRepository
{
  async create(vehicle: Vehicle): Promise<Vehicle> {
    const prismaVehicle = await this.prisma.vehicle.create({
      data: {
        brand: vehicle.brand,
        model: vehicle.model,
        color: vehicle.color.toString(),
        plate: vehicle.plate.toString(),
        type: vehicle.type,
      },
    });

    return this.toDomain(prismaVehicle);
  }

  async findById(id: string): Promise<Vehicle | null> {
    const prismaVehicle = await this.prisma.vehicle.findUnique({
      where: { id },
    });

    return prismaVehicle ? this.toDomain(prismaVehicle) : null;
  }

  async findAll(): Promise<Vehicle[]> {
    const prismaVehicles = await this.prisma.vehicle.findMany();
    return prismaVehicles.map((vehicle) => this.toDomain(vehicle));
  }

  async update(id: string, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    const prismaVehicle = await this.prisma.vehicle.update({
      where: { id },
      data: {
        brand: vehicle.brand,
        model: vehicle.model,
        color: vehicle.color?.toString(),
      },
    });

    return this.toDomain(prismaVehicle);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.vehicle.delete({
      where: { id },
    });
  }

  async findByPlate(plate: Plate): Promise<Vehicle | null> {
    const prismaVehicle = await this.prisma.vehicle.findUnique({
      where: { plate: plate.toString() },
    });

    return prismaVehicle ? this.toDomain(prismaVehicle) : null;
  }

  async findByType(type: VehicleType): Promise<Vehicle[]> {
    const prismaVehicles = await this.prisma.vehicle.findMany({
      where: { type },
    });
    return prismaVehicles.map((vehicle) => this.toDomain(vehicle));
  }

  private toDomain(prismaVehicle: PrismaVehicle): Vehicle {
    return new Vehicle(
      prismaVehicle.brand,
      prismaVehicle.model,
      prismaVehicle.color,
      prismaVehicle.plate,
      prismaVehicle.type as VehicleType
    );
  }
}
