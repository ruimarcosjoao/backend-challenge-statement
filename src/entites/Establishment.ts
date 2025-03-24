import { Common } from "./Common";
import {
  Address,
  ParkingSlots,
  Phone,
} from "./value-objects/EstablishmentValueObjects";

export class Establishment extends Common {
  name: string;
  address: Address;
  phone: Phone;
  motorcycleSlots: ParkingSlots;
  carSlots: ParkingSlots;

  constructor(
    name: string,
    address: string,
    phone: string,
    motorcycleSlots: number,
    carSlots: number
  ) {
    super();
    this.name = name;
    this.address = new Address(address);
    this.phone = new Phone(phone);
    this.motorcycleSlots = new ParkingSlots(motorcycleSlots);
    this.carSlots = new ParkingSlots(carSlots);
  }

  update(
    name?: string,
    address?: string,
    phone?: string,
    motorcycleSlots?: number,
    carSlots?: number
  ) {
    if (name) this.name = name;
    if (address) this.address = new Address(address);
    if (phone) this.phone = new Phone(phone);
    if (motorcycleSlots !== undefined)
      this.motorcycleSlots = new ParkingSlots(motorcycleSlots);
    if (carSlots !== undefined) this.carSlots = new ParkingSlots(carSlots);
    super.update();
  }
}
