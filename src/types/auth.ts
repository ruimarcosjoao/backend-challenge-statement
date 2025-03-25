import { Role } from "../entites/value-objects/UserValueObjects";

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    fullName: string;
    email: string;
    role: Role;
  };
}

export interface RegisterDTO {
  email: string;
  password: string;
  fullName: string;
}

export interface RegisterResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    fullName: string;
    role: Role;
  };
}
