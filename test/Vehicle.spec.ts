import { describe, expect, it } from "vitest";
import { VehicleType } from "../src/entites/value-objects/VehicleValueObjects";
import { Vehicle } from "../src/entites/Vehicle";

describe("createVehicle", () => {
  it("should create a vehicle", () => {
    const vehicle = new Vehicle(
      "Toyota",
      "Corolla",
      "Red",
      "LDS-12-34-AE",
      VehicleType.CAR
    );
    expect(vehicle).toBeInstanceOf(Vehicle);
  });
});
