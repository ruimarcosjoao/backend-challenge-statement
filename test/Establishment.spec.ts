import { describe, expect, it } from "vitest";
import { Establishment } from "../src/entites/Establishment";
import { ParkingEntry } from "../src/entites/ParkingEntry";
import { Vehicle } from "../src/entites/Vehicle";
import { VehicleType } from "../src/entites/value-objects/VehicleValueObjects";
import { ParkingService } from "../src/services/ParkingService";

describe("Establishment", () => {
  it("should create an establishment", () => {
    const establishment = new Establishment(
      "Statement SA",
      "Maianga Edificio Kende",
      "+244947321534",
      10,
      5
    );
    expect(establishment).toBeInstanceOf(Establishment);
  });

  it("Park car in establishment", async () => {
    const establishment = new Establishment(
      "Statement SA",
      "Maianga Edificio Kende",
      "+244947321534",
      10,
      5
    );
    const car = new Vehicle(
      "Toyota",
      "Corolla",
      "Red",
      "LDS-12-34-AE",
      VehicleType.CAR
    );
    const parkingService = new ParkingService(
      new ParkingEntry(car.id, establishment.id)
    );
    const parkedVehicle = await parkingService.parkVehicle(new Date());

    expect(parkedVehicle).toBeInstanceOf(ParkingEntry);
  });
});
