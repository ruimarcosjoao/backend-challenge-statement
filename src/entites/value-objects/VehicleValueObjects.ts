export class Plate {
  private readonly value: string;

  constructor(plate: string) {
    if (!this.isValidPlate(plate)) {
      throw new Error("Placa inválida");
    }
    this.value = plate.toUpperCase();
  }

  private isValidPlate(plate: string): boolean {
    const plateRegex =
      /^(?:[A-Z]{2}-\d{2}-\d{2}-[A-Z]{2}|[A-Z]{3}-\d{2}-\d{2}-[A-Z]{2}|[A-Z]{3}-\d{2}-\d{3})$/;
    return plateRegex.test(plate.toUpperCase());
  }

  toString(): string {
    return this.value;
  }
}

export enum VehicleType {
  CAR = "CAR",
  MOTORCYCLE = "MOTORCYCLE",
}

export class Color {
  private readonly value: string;

  constructor(color: string) {
    if (!color || color.trim().length === 0) {
      throw new Error("Cor não pode ser vazia");
    }
    this.value = color.trim();
  }

  toString(): string {
    return this.value;
  }
}
