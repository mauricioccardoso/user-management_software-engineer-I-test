import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository : IUsersRepository
  ) {}

  async execute({ id, name, email, cpf } : ICreateUserDTO) : Promise<void> {
    const user = await this.userRepository.findById(id);

    if(!user) {
      throw new AppError("User does not exists");
    }

    user.name = name;
    user.email = email;
    user.cpf = cpf;

    await this.userRepository.create(user);
  }
}

export { UpdateUserUseCase };
