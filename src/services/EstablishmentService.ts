import { Establishment } from "../entites/Establishment";
import { IEstablishmentRepository } from "../repositories/EstablishmentRepository";

export class EstablishmentService {
  private establishment: Establishment;
  private EstablishmentRepository: IEstablishmentRepository;

  constructor(
    establishment: Establishment,
    EstablishmentRepository: IEstablishmentRepository
  ) {
    this.establishment = establishment;
    this.EstablishmentRepository = EstablishmentRepository;
  }

  async createEstablishment() {
    const establishment = await this.EstablishmentRepository.create(
      this.establishment
    );
    return establishment;
  }
}
