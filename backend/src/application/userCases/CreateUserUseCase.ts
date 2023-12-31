import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { User } from "@domain/entities/typeorm/User";
import { IDateProvider } from "@infrastructure/container/providers/DateProvider/IDateProvider";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository,

    @inject("DateProvider")
    private dateProvider : IDateProvider
  ) {}

  async execute({
    name,
    email,
    cpf,
    birthdate
  } : ICreateUserDTO) : Promise<User> {
    let userAlreadyExists : User = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists) {
      throw new AppError("Usuário já existe com este e-mail");
    }

    userAlreadyExists = await this.usersRepository.findByCPF(cpf);

    if(userAlreadyExists) {
      throw new AppError("Usuário já existe com este CPF");
    }

    const age = this.dateProvider.calculateYears(birthdate);

    if(age < 18) {
      throw new AppError("Data de nascimento inválida. O usuário deve ter mais de 18 anos");
    }

    const user = await this.usersRepository.create({
      name,
      email,
      cpf,
      birthdate : this.dateProvider.formatDate(birthdate)
    });

    return user;
  }
}

export { CreateUserUseCase };
