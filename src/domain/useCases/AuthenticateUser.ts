import { IUserRepository } from "../repositories/IUserRepository";
import { IUser } from "../entities/IUser";

export class AuthenticateUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string, password: string): Promise<Omit<IUser, 'password'>> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || (user.password !== password)) {
      throw new Error("Usuário não encontrado ou incorreta");
    }
 
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
  }
}