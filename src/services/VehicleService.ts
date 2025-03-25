import { ParkingEntry } from "../entites/ParkingEntry";
import { Vehicle } from "../entites/Vehicle";
import { IEstablishmentRepository } from "../repositories/EstablishmentRepository";
import { IParkingEntryRepository } from "../repositories/ParkingEntryRepository";
import { IVehicleRepository } from "../repositories/VehicleRepository";

export class VehicleService {
  private vehicleRepository: IVehicleRepository;
  private parkingEntryRepository: IParkingEntryRepository;
  private establishmentRepository: IEstablishmentRepository;

  constructor(
    vehicleRepository: IVehicleRepository,
    parkingEntryRepository: IParkingEntryRepository,
    establishmentRepository: IEstablishmentRepository
  ) {
    this.vehicleRepository = vehicleRepository;
    this.parkingEntryRepository = parkingEntryRepository;
    this.establishmentRepository = establishmentRepository;
  }

  async createVehicle(vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.create(vehicle);
  }

  async findVehicleById(id: string): Promise<Vehicle | null> {
    return this.vehicleRepository.findById(id);
  }

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll();
  }

  async updateVehicle(id: string, vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.update(id, vehicle);
  }

  async createParkingEntry(parkingEntry: ParkingEntry): Promise<ParkingEntry> {
    const vehicle = await this.vehicleRepository.findById(
      parkingEntry.vehicleId
    );
    if (!vehicle) {
      throw new Error("Veículo não encontrado");
    }

    const establishment = await this.establishmentRepository.findById(
      parkingEntry.establishmentId
    );
    if (!establishment) {
      throw new Error("Estabelecimento não encontrado");
    }

    const activeEntries =
      await this.parkingEntryRepository.findActiveByEstablishment(
        parkingEntry.establishmentId
      );

    const vehicleType = vehicle.type;
    const availableSlots =
      vehicleType === "CAR"
        ? establishment.carSlots.toString()
        : establishment.motorcycleSlots.toString();

    if (activeEntries.length >= Number(availableSlots)) {
      throw new Error("Estabelecimento sem vagas disponíveis");
    }

    return this.parkingEntryRepository.create(parkingEntry);
  }

  async exitParkingEntry(id: string): Promise<ParkingEntry> {
    const parkingEntry = await this.parkingEntryRepository.findById(id);
    if (!parkingEntry) {
      throw new Error("Entrada de estacionamento não encontrada");
    }

    if (parkingEntry.exitTime) {
      throw new Error("Veículo já saiu do estacionamento");
    }

    parkingEntry.exit();
    return this.parkingEntryRepository.update(id, parkingEntry);
  }

  async findActiveParkingEntries(
    establishmentId: string
  ): Promise<ParkingEntry[]> {
    return this.parkingEntryRepository.findActiveByEstablishment(
      establishmentId
    );
  }
}
