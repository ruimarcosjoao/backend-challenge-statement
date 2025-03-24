import { User } from "../entites/User";
import { Email, Username } from "../entites/value-objects/UserValueObjects";
import { IRepository } from "./IRepository";

export interface IUserRepository extends IRepository<User> {
  findByEmail(email: Email): Promise<User | null>;
  findByUsername(username: Username): Promise<User | null>;
}

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error("Usuário não encontrado");
    }

    const existingUser = this.users[index];
    if (user.fullName) existingUser.fullName = user.fullName;
    if (user.role) existingUser.role = user.role;
    existingUser.update();

    return existingUser;
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error("Usuário não encontrado");
    }
    this.users.splice(index, 1);
  }

  async findByEmail(email: Email): Promise<User | null> {
    return (
      this.users.find((user) => user.email.toString() === email.toString()) ||
      null
    );
  }

  async findByUsername(username: Username): Promise<User | null> {
    return (
      this.users.find(
        (user) => user.username.toString() === username.toString()
      ) || null
    );
  }
}
