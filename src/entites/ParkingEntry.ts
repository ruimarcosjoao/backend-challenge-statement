import { Common } from "./Common";

export class ParkingEntry extends Common {
  vehicleId: string;
  establishmentId: string;
  entryTime: Date;
  exitTime?: Date;

  constructor(vehicleId: string, establishmentId: string) {
    super();
    this.vehicleId = vehicleId;
    this.establishmentId = establishmentId;
    this.entryTime = new Date();
  }

  exit() {
    this.exitTime = new Date();
    super.update();
  }
}
