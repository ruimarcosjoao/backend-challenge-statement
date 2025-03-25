import { FastifyInstance } from "fastify";
import { ParkingEntry } from "../entites/ParkingEntry";
import { PrismaEstablishmentRepository } from "../repositories/prisma/PrismaEstablishmentRepository";
import { PrismaParkingEntryRepository } from "../repositories/prisma/PrismaParkingEntryRepository";
import { PrismaVehicleRepository } from "../repositories/prisma/PrismaVehicleRepository";
import { CreateParkingEntryDTO, ParkingEntryResponse } from "../types/vehicle";

export class ParkingService {
  private parkingEntryRepository: PrismaParkingEntryRepository;
  private vehicleRepository: PrismaVehicleRepository;
  private establishmentRepository: PrismaEstablishmentRepository;

  constructor(private app: FastifyInstance) {
    this.parkingEntryRepository = new PrismaParkingEntryRepository();
    this.vehicleRepository = new PrismaVehicleRepository();
    this.establishmentRepository = new PrismaEstablishmentRepository();
  }

  async createParkingEntry(
    createDTO: CreateParkingEntryDTO
  ): Promise<ParkingEntryResponse> {
    // Verificar se o veículo existe
    const vehicle = await this.vehicleRepository.findById(createDTO.vehicleId);
    if (!vehicle) {
      throw new Error("Veículo não encontrado");
    }

    // Verificar se o estabelecimento existe
    const establishment = await this.establishmentRepository.findById(
      createDTO.establishmentId
    );
    if (!establishment) {
      throw new Error("Estabelecimento não encontrado");
    }

    // Verificar se o veículo já está estacionado
    const activeEntry = await this.parkingEntryRepository.findActiveByVehicle(
      createDTO.vehicleId
    );
    if (activeEntry) {
      throw new Error("Veículo já está estacionado");
    }

    // Verificar disponibilidade de vagas
    const activeEntries =
      await this.parkingEntryRepository.findActiveByEstablishment(
        createDTO.establishmentId
      );

    const vehicleType = vehicle.type;
    const availableSlots =
      vehicleType === "CAR"
        ? establishment.carSlots.toString()
        : establishment.motorcycleSlots.toString();

    if (activeEntries.length >= Number(availableSlots)) {
      throw new Error("Estabelecimento sem vagas disponíveis");
    }

    // Criar entrada de estacionamento
    const parkingEntry = new ParkingEntry(
      createDTO.vehicleId,
      createDTO.establishmentId
    );

    const created = await this.parkingEntryRepository.create(parkingEntry);
    return this.toResponse(created);
  }

  async exitParkingEntry(id: string): Promise<ParkingEntryResponse> {
    const parkingEntry = await this.parkingEntryRepository.findById(id);
    if (!parkingEntry) {
      throw new Error("Entrada de estacionamento não encontrada");
    }

    if (parkingEntry.exitTime) {
      throw new Error("Veículo já saiu do estacionamento");
    }

    parkingEntry.exit();
    const updated = await this.parkingEntryRepository.update(id, parkingEntry);
    return this.toResponse(updated);
  }

  async findActiveParkingEntries(
    establishmentId: string
  ): Promise<ParkingEntryResponse[]> {
    const entries = await this.parkingEntryRepository.findActiveByEstablishment(
      establishmentId
    );
    return entries.map((entry) => this.toResponse(entry));
  }

  async findVehicleParkingHistory(
    vehicleId: string
  ): Promise<ParkingEntryResponse[]> {
    const entries = await this.parkingEntryRepository.findByVehicleId(
      vehicleId
    );
    return entries.map((entry) => this.toResponse(entry));
  }

  private toResponse(parkingEntry: ParkingEntry): ParkingEntryResponse {
    return {
      id: parkingEntry.id,
      vehicleId: parkingEntry.vehicleId,
      establishmentId: parkingEntry.establishmentId,
      entryTime: parkingEntry.entryTime,
      exitTime: parkingEntry.exitTime,
      createdAt: parkingEntry.createdAt,
      updatedAt: parkingEntry.updatedAt,
    };
  }
}
