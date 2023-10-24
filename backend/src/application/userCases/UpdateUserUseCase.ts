import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@infrastructure/container/providers/DateProvider/IDateProvider";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository : IUsersRepository,

    @inject("DateProvider")
    private dateProvider : IDateProvider
  ) {}

  async execute({ id, name, email, cpf, birthdate } : ICreateUserDTO) : Promise<void> {
    const user = await this.userRepository.findById(id);

    if(!user) {
      throw new AppError("User does not exists");
    }

    const age = this.dateProvider.calculateYears(birthdate);

    if(age < 18) {
      throw new AppError("Invalid Birthdate. User must be older than 18 years");
    }

    user.name = name;
    user.email = email;
    user.cpf = cpf;
    user.birthdate = this.dateProvider.formatDate(birthdate);

    await this.userRepository.create(user);
  }
}

export { UpdateUserUseCase };
