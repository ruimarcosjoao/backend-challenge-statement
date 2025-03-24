import { Common } from "./Common";
import {
  Email,
  Password,
  Role,
  Username,
} from "./value-objects/UserValueObjects";

export class User extends Common {
  username: Username;
  fullName: string;
  email: Email;
  password: Password;
  role: Role;

  constructor(
    username: string,
    fullName: string,
    email: string,
    password: string,
    role: Role = Role.USER
  ) {
    super();
    this.username = new Username(username);
    this.fullName = fullName;
    this.email = new Email(email);
    this.password = new Password(password);
    this.role = role;
  }

  update(fullName?: string, role?: Role) {
    if (fullName) this.fullName = fullName;
    if (role) this.role = role;
    super.update();
  }
}
