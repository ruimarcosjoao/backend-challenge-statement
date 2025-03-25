import bcrypt from "bcryptjs";
import { FastifyInstance } from "fastify";
import { Role } from "../entites/value-objects/UserValueObjects";
import { PrismaClient } from "../lib/prisma_client";
import {
  LoginDTO,
  LoginResponse,
  RegisterDTO,
  RegisterResponse,
} from "../types/auth";

export class AuthService {
  private prisma: PrismaClient;

  constructor(private app: FastifyInstance) {
    this.prisma = new PrismaClient();
  }

  async login(loginDTO: LoginDTO): Promise<LoginResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDTO.email },
    });

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const isValidPassword = await bcrypt.compare(
      loginDTO.password,
      user.password
    );

    if (!isValidPassword) {
      throw new Error("Credenciais inválidas");
    }

    const token = this.generateToken(user);

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    };
  }

  private generateToken(user: any): string {
    return this.app.jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      { expiresIn: "24h" }
    );
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.app.jwt.verify(token);
    } catch (error) {
      throw new Error("Token inválido");
    }
  }

  async register(registerDTO: RegisterDTO): Promise<RegisterResponse> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDTO.email },
    });

    if (existingUser) {
      throw new Error("Usuário já existe");
    }

    const userCount = await this.prisma.user.count();
    const hashedPassword = await bcrypt.hash(registerDTO.password, 10);
    const username = registerDTO.email.split("@")[0];

    const userData = {
      username,
      fullName: registerDTO.fullName,
      email: registerDTO.email,
      password: hashedPassword,
      role: userCount < 1 ? Role.ADMIN : Role.USER,
    };

    const newUser = await this.prisma.user.create({
      data: userData,
    });

    const token = this.generateToken(newUser);

    return {
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        fullName: newUser.fullName,
        role: newUser.role,
      },
    };
  }
}
