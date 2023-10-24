import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { User } from "@domain/entities/typeorm/User";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const usersList = await this.usersRepository.list();

    return usersList;
  }
}

export { ListUsersUseCase };
