import { AuthService } from "../services/AuthService";
import { LoginDTO } from "../types/auth";

export class LoginUseCase {
  constructor(private authService: AuthService) {}

  async execute(loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }
}
