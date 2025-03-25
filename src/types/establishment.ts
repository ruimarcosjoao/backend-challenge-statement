export interface CreateEstablishmentDTO {
  name: string;
  address: string;
  phone: string;
  motorcycleSlots: number;
  carSlots: number;
}

export interface UpdateEstablishmentDTO {
  name?: string;
  address?: string;
  phone?: string;
  motorcycleSlots?: number;
  carSlots?: number;
}

export interface EstablishmentResponse {
  id: string;
  name: string;
  address: string;
  phone: string;
  motorcycleSlots: number;
  carSlots: number;
  createdAt: Date;
  updatedAt: Date;
}
