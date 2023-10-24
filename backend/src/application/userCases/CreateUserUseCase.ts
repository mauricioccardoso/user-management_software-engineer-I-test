import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { User } from "@domain/entities/typeorm/User";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) {
  }

  async execute({
    name,
    email,
    cpf
  } : ICreateUserDTO) : Promise<void> {
    let userAlreadyExists : User = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists) {
      throw new AppError("User already exists with this email");
    }

    userAlreadyExists = await this.usersRepository.findByCPF(cpf);

    if(userAlreadyExists) {
      throw new AppError("User already exists with this CPF");
    }

    await this.usersRepository.create({
      name,
      email,
      cpf
    });
  }
}

export { CreateUserUseCase };
