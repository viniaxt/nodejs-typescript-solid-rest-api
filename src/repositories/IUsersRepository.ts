import { User } from "../entities/User";

export interface IUSersRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
}