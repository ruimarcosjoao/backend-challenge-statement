import { beforeEach, describe, expect, it } from "vitest";
import { ParkingEntry } from "../src/entites/ParkingEntry";
import { ParkRepository } from "../src/repositories/ParkRepository";

describe("ParkRepository", () => {
  let repository: ParkRepository;

  beforeEach(() => {
    repository = new ParkRepository();
  });

  describe("create e findByEstablishmentId", () => {
    it("deve cadastrar um veículo e retornar todos os veículos parqueados no estabelecimento", async () => {
      // Criar uma entrada de estacionamento
      const parkingEntry = new ParkingEntry("vehicle-123", "establishment-456");

      // Cadastrar o veículo
      const createdEntry = await repository.create(parkingEntry);

      // Verificar se a entrada foi criada corretamente
      expect(createdEntry).toBeDefined();
      expect(createdEntry.vehicleId).toBe("vehicle-123");
      expect(createdEntry.establishmentId).toBe("establishment-456");
      expect(createdEntry.entryTime).toBeDefined();
      expect(createdEntry.exitTime).toBeUndefined();

      // Buscar todos os veículos parqueados no estabelecimento
      const parkedVehicles = await repository.findByEstablishmentId(
        "establishment-456"
      );

      // Verificar se o veículo está na lista
      expect(parkedVehicles).toHaveLength(1);
      expect(parkedVehicles[0].id).toBe(createdEntry.id);
    });

    it("deve retornar lista vazia quando não houver veículos no estabelecimento", async () => {
      const parkedVehicles = await repository.findByEstablishmentId(
        "establishment-999"
      );
      expect(parkedVehicles).toHaveLength(0);
    });

    it("deve listar múltiplos veículos parqueados no mesmo estabelecimento", async () => {
      // Criar várias entradas de estacionamento
      const entry1 = new ParkingEntry("vehicle-1", "establishment-1");
      const entry2 = new ParkingEntry("vehicle-2", "establishment-1");
      const entry3 = new ParkingEntry("vehicle-3", "establishment-2");

      // Cadastrar os veículos
      await repository.create(entry1);
      await repository.create(entry2);
      await repository.create(entry3);

      // Buscar veículos do establishment-1
      const parkedVehicles = await repository.findByEstablishmentId(
        "establishment-1"
      );

      // Verificar se apenas os veículos do establishment-1 foram retornados
      expect(parkedVehicles).toHaveLength(2);
      expect(parkedVehicles.map((v) => v.vehicleId)).toContain("vehicle-1");
      expect(parkedVehicles.map((v) => v.vehicleId)).toContain("vehicle-2");
    });
  });
});
