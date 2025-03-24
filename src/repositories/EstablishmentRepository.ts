import { Establishment } from "../entites/Establishment";
import {
  Address,
  Phone,
} from "../entites/value-objects/EstablishmentValueObjects";
import { IRepository } from "./IRepository";

export interface IEstablishmentRepository extends IRepository<Establishment> {
  findByName(name: string): Promise<Establishment[]>;
  findByAddress(address: Address): Promise<Establishment[]>;
  findByPhone(phone: Phone): Promise<Establishment | null>;
}

export class EstablishmentRepository implements IEstablishmentRepository {
  private establishments: Establishment[] = [];

  async create(establishment: Establishment): Promise<Establishment> {
    this.establishments.push(establishment);
    return establishment;
  }

  async findById(id: string): Promise<Establishment | null> {
    return (
      this.establishments.find((establishment) => establishment.id === id) ||
      null
    );
  }

  async findAll(): Promise<Establishment[]> {
    return this.establishments;
  }

  async update(
    id: string,
    establishment: Partial<Establishment>
  ): Promise<Establishment> {
    const index = this.establishments.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error("Estabelecimento não encontrado");
    }

    const existingEstablishment = this.establishments[index];
    if (establishment.name) existingEstablishment.name = establishment.name;
    if (establishment.address)
      existingEstablishment.address = establishment.address;
    if (establishment.phone) existingEstablishment.phone = establishment.phone;
    if (establishment.motorcycleSlots)
      existingEstablishment.motorcycleSlots = establishment.motorcycleSlots;
    if (establishment.carSlots)
      existingEstablishment.carSlots = establishment.carSlots;
    existingEstablishment.update();

    return existingEstablishment;
  }

  async delete(id: string): Promise<void> {
    const index = this.establishments.findIndex(
      (establishment) => establishment.id === id
    );
    if (index === -1) {
      throw new Error("Estabelecimento não encontrado");
    }
    this.establishments.splice(index, 1);
  }

  async findByName(name: string): Promise<Establishment[]> {
    return this.establishments.filter((establishment) =>
      establishment.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  async findByAddress(address: Address): Promise<Establishment[]> {
    return this.establishments.filter(
      (establishment) => establishment.address.toString() === address.toString()
    );
  }

  async findByPhone(phone: Phone): Promise<Establishment | null> {
    return (
      this.establishments.find(
        (establishment) => establishment.phone.toString() === phone.toString()
      ) || null
    );
  }
}
