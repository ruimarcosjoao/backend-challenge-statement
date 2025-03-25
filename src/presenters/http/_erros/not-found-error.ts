export class NotFound extends Error {
  constructor(message: string = "Recurso não encontrado") {
    super(message);
    this.name = "NotFoundError";
  }
}
