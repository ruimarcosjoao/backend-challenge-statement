import { ParkingEntry as PrismaParkingEntry } from "@prisma/client";
import { ParkingEntry } from "../../entites/ParkingEntry";
import { IParkingEntryRepository } from "../ParkingEntryRepository";
import { PrismaRepository } from "./PrismaRepository";

export class PrismaParkingEntryRepository
  extends PrismaRepository<ParkingEntry>
  implements IParkingEntryRepository
{
  async create(parkingEntry: ParkingEntry): Promise<ParkingEntry> {
    const prismaParkingEntry = await this.prisma.parkingEntry.create({
      data: {
        vehicleId: parkingEntry.vehicleId,
        establishmentId: parkingEntry.establishmentId,
        entryTime: parkingEntry.entryTime,
        exitTime: parkingEntry.exitTime,
      },
    });

    return this.toDomain(prismaParkingEntry);
  }

  async findById(id: string): Promise<ParkingEntry | null> {
    const prismaParkingEntry = await this.prisma.parkingEntry.findUnique({
      where: { id },
    });

    return prismaParkingEntry ? this.toDomain(prismaParkingEntry) : null;
  }

  async findAll(): Promise<ParkingEntry[]> {
    const prismaParkingEntries = await this.prisma.parkingEntry.findMany();
    return prismaParkingEntries.map((entry) => this.toDomain(entry));
  }

  async update(
    id: string,
    parkingEntry: Partial<ParkingEntry>
  ): Promise<ParkingEntry> {
    const prismaParkingEntry = await this.prisma.parkingEntry.update({
      where: { id },
      data: {
        vehicleId: parkingEntry.vehicleId,
        establishmentId: parkingEntry.establishmentId,
        entryTime: parkingEntry.entryTime,
        exitTime: parkingEntry.exitTime,
      },
    });

    return this.toDomain(prismaParkingEntry);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.parkingEntry.delete({
      where: { id },
    });
  }

  async findActiveByEstablishment(
    establishmentId: string
  ): Promise<ParkingEntry[]> {
    const prismaParkingEntries = await this.prisma.parkingEntry.findMany({
      where: {
        establishmentId,
        exitTime: null,
      },
    });

    return prismaParkingEntries.map((entry) => this.toDomain(entry));
  }

  async findActiveByVehicle(vehicleId: string): Promise<ParkingEntry | null> {
    const prismaParkingEntry = await this.prisma.parkingEntry.findFirst({
      where: {
        vehicleId,
        exitTime: null,
      },
    });

    return prismaParkingEntry ? this.toDomain(prismaParkingEntry) : null;
  }

  private toDomain(prismaParkingEntry: PrismaParkingEntry): ParkingEntry {
    const parkingEntry = new ParkingEntry(
      prismaParkingEntry.vehicleId,
      prismaParkingEntry.establishmentId
    );
    parkingEntry.id = prismaParkingEntry.id;
    parkingEntry.createdAt = prismaParkingEntry.createdAt;
    parkingEntry.updatedAt = prismaParkingEntry.updatedAt;
    parkingEntry.entryTime = prismaParkingEntry.entryTime;
    parkingEntry.exitTime = prismaParkingEntry.exitTime;
    return parkingEntry;
  }
}
