import { Common } from "./Common";
import { Color, Plate, VehicleType } from "./value-objects/VehicleValueObjects";

export class Vehicle extends Common {
  brand: string;
  model: string;
  color: Color;
  plate: Plate;
  type: VehicleType;

  constructor(
    brand: string,
    model: string,
    color: string,
    plate: string,
    type: VehicleType
  ) {
    super();
    this.brand = brand;
    this.model = model;
    this.color = new Color(color);
    this.plate = new Plate(plate);
    this.type = type;
  }

  update(brand?: string, model?: string, color?: string) {
    if (brand) this.brand = brand;
    if (model) this.model = model;
    if (color) this.color = new Color(color);
    super.update();
  }
}
