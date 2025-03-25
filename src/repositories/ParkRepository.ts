import { ParkingEntry } from "../entites/ParkingEntry";
import { IRepository } from "./IRepository";

export interface IParkRepository extends IRepository<ParkingEntry> {
  findByVehicleId(vehicleId: string): Promise<ParkingEntry | null>;
  findByEstablishmentId(establishmentId: string): Promise<ParkingEntry[]>;
}

export class ParkRepository implements IParkRepository {
  private parkingEntries: ParkingEntry[] = [];

  async findById(id: string): Promise<ParkingEntry | null> {
    return this.parkingEntries.find((entry) => entry.id === id) || null;
  }
  async findAll(): Promise<ParkingEntry[]> {
    return this.parkingEntries;
  }
  async update(
    id: string,
    entity: Partial<ParkingEntry>
  ): Promise<ParkingEntry> {
    const index = this.parkingEntries.findIndex((entry) => entry.id === id);
    if (index === -1) {
      throw new Error("Parking entry not found");
    }
    const existingEntry = this.parkingEntries[index];
    if (entity.vehicleId) existingEntry.vehicleId = entity.vehicleId;
    if (entity.establishmentId)
      existingEntry.establishmentId = entity.establishmentId;
    if (entity.entryTime) existingEntry.entryTime = entity.entryTime;
    if (entity.exitTime) existingEntry.exitTime = entity.exitTime;
    existingEntry.update();
    return existingEntry;
  }
  async delete(id: string): Promise<void> {
    this.parkingEntries = this.parkingEntries.filter(
      (entry) => entry.id !== id
    );
  }

  async create(parkingEntry: ParkingEntry): Promise<ParkingEntry> {
    this.parkingEntries.push(parkingEntry);
    return parkingEntry;
  }

  async findByVehicleId(vehicleId: string): Promise<ParkingEntry | null> {
    return (
      this.parkingEntries.find((entry) => entry.vehicleId === vehicleId) || null
    );
  }

  async findByEstablishmentId(
    establishmentId: string
  ): Promise<ParkingEntry[]> {
    return this.parkingEntries.filter(
      (entry) => entry.establishmentId === establishmentId
    );
  }
}
