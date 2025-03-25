export class Phone {
  private readonly value: string;

  constructor(phone: string) {
    if (!this.isValidPhone(phone)) {
      throw new Error("Telefone inválido");
    }
    this.value = phone;
  }

  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^(\+244|00244)\d{9}$/;
    return phoneRegex.test(phone);
  }

  toString(): string {
    return this.value;
  }
}

export class Address {
  private readonly value: string;

  constructor(address: string) {
    if (!address || address.trim().length === 0) {
      throw new Error("Endereço não pode ser vazio");
    }
    this.value = address.trim();
  }

  toString(): string {
    return this.value;
  }
}

export class ParkingSlots {
  private readonly value: number;

  constructor(slots: number) {
    if (slots < 0) {
      throw new Error("Número de vagas não pode ser negativo");
    }
    this.value = slots;
  }

  toString(): number {
    return this.value;
  }
}
