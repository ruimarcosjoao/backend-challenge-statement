export class Email {
  private readonly value: string;

  constructor(email: string) {
    if (!this.isValidEmail(email)) {
      throw new Error("Email inválido");
    }
    this.value = email;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  toString(): string {
    return this.value;
  }
}

export class Password {
  private readonly value: string;

  constructor(password: string) {
    if (password.length < 6) {
      throw new Error("A senha deve ter no mínimo 6 caracteres");
    }
    this.value = password;
  }

  toString(): string {
    return this.value;
  }
}

export class Username {
  private readonly value: string;

  constructor(username: string) {
    if (username.length < 3) {
      throw new Error("O nome de usuário deve ter no mínimo 3 caracteres");
    }
    this.value = username;
  }

  toString(): string {
    return this.value;
  }
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
