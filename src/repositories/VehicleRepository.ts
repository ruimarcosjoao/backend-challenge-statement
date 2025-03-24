import { Vehicle } from "../entites/Vehicle";
import {
  Plate,
  VehicleType,
} from "../entites/value-objects/VehicleValueObjects";
import { IRepository } from "./IRepository";

export interface IVehicleRepository extends IRepository<Vehicle> {
  findByPlate(plate: Plate): Promise<Vehicle | null>;
  findByType(type: VehicleType): Promise<Vehicle[]>;
}

export class VehicleRepository implements IVehicleRepository {
  private vehicles: Vehicle[] = [];

  async create(vehicle: Vehicle): Promise<Vehicle> {
    this.vehicles.push(vehicle);
    return vehicle;
  }

  async findById(id: string): Promise<Vehicle | null> {
    return this.vehicles.find((vehicle) => vehicle.id === id) || null;
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicles;
  }

  async update(id: string, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    const index = this.vehicles.findIndex((v) => v.id === id);
    if (index === -1) {
      throw new Error("Veículo não encontrado");
    }

    const existingVehicle = this.vehicles[index];
    if (vehicle.brand) existingVehicle.brand = vehicle.brand;
    if (vehicle.model) existingVehicle.model = vehicle.model;
    if (vehicle.color) existingVehicle.color = vehicle.color;
    existingVehicle.update();

    return existingVehicle;
  }

  async delete(id: string): Promise<void> {
    const index = this.vehicles.findIndex((vehicle) => vehicle.id === id);
    if (index === -1) {
      throw new Error("Veículo não encontrado");
    }
    this.vehicles.splice(index, 1);
  }

  async findByPlate(plate: Plate): Promise<Vehicle | null> {
    return (
      this.vehicles.find(
        (vehicle) => vehicle.plate.toString() === plate.toString()
      ) || null
    );
  }

  async findByType(type: VehicleType): Promise<Vehicle[]> {
    return this.vehicles.filter((vehicle) => vehicle.type === type);
  }
}
