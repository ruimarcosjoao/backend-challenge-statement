import { User as PrismaUser } from "@prisma/client";
import { User } from "../../entites/User";
import {
  Email,
  Role,
  Username,
} from "../../entites/value-objects/UserValueObjects";
import { IUserRepository } from "../UserRepository";
import { PrismaRepository } from "./PrismaRepository";

export class PrismaUserRepository
  extends PrismaRepository<User>
  implements IUserRepository
{
  async create(user: User): Promise<User> {
    const prismaUser = await this.prisma.user.create({
      data: {
        username: user.username.toString(),
        fullName: user.fullName,
        email: user.email.toString(),
        password: user.password.toString(),
        role: user.role,
      },
    });

    return this.toDomain(prismaUser);
  }

  async findById(id: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { id },
    });

    return prismaUser ? this.toDomain(prismaUser) : null;
  }

  async findAll(): Promise<User[]> {
    const prismaUsers = await this.prisma.user.findMany();
    return prismaUsers.map((user) => this.toDomain(user));
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const prismaUser = await this.prisma.user.update({
      where: { id },
      data: {
        fullName: user.fullName,
        role: user.role,
      },
    });

    return this.toDomain(prismaUser);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async findByEmail(email: Email): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { email: email.toString() },
    });

    return prismaUser ? this.toDomain(prismaUser) : null;
  }

  async findByUsername(username: Username): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { username: username.toString() },
    });

    return prismaUser ? this.toDomain(prismaUser) : null;
  }

  private toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.username,
      prismaUser.fullName,
      prismaUser.email,
      prismaUser.password,
      prismaUser.role as Role
    );
  }

  async count(): Promise<number> {
    const prismaUsers = await this.prisma.user.count();
    return prismaUsers;
  }
}
