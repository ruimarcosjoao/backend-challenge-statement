export interface CreateVehicleDTO {
  brand: string;
  model: string;
  color: string;
  plate: string;
  type: "CAR" | "MOTORCYCLE";
}

export interface UpdateVehicleDTO {
  brand?: string;
  model?: string;
  color?: string;
  plate?: string;
  type?: "CAR" | "MOTORCYCLE";
}

export interface VehicleResponse {
  id: string;
  brand: string;
  model: string;
  color: string;
  plate: string;
  type: "CAR" | "MOTORCYCLE";
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateParkingEntryDTO {
  vehicleId: string;
  establishmentId: string;
}

export interface ParkingEntryResponse {
  id: string;
  vehicleId: string;
  establishmentId: string;
  entryTime: Date;
  exitTime?: Date;
  createdAt: Date;
  updatedAt: Date;
}
