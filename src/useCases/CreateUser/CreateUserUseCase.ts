import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUSersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

/**
 * * Single Responsability Principle:
 * > Unique responsability from CreateUserUseCase is to save a User
 */
export class CreateUserUseCase {
  /**
   * * Liskov Substitution Principle
   * -> Depends on an interface/contract (IUSersRepository)
   * 
   * * Dependecy inversion Principle
   * -> Doesn't matter if its a Postgres or a MongoDB repository
   */
  constructor (
    private usersRepository: IUSersRepository,
    private mailProvider: IMailProvider
  ) {};

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exixts.')
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe Plataforma',
        email: 'equipe@plataforma.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: `<p>Você já pode fazer login em nossa plataforma</p>`
    })
  }
}