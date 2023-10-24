import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { User } from "@domain/entities/typeorm/User";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository : Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    email,
    cpf,
    birthdate
  } : ICreateUserDTO) : Promise<void> {
    const user : User = this.repository.create({
      id,
      name,
      email,
      cpf,
      birthdate
    });
    await this.repository.save(user);
  }

  async findById(id : string) : Promise<User> {
    const user : User = await this.repository.findOne({ id });
    return user;
  }

  async findByEmail(email : string) : Promise<User> {
    const user : User = await this.repository.findOne({ email });
    return user;
  }

  async findByCPF(cpf : string) : Promise<User> {
    const user : User = await this.repository.findOne({ cpf });
    return user;
  }

  async list() : Promise<User[]> {
    const usersList = await this.repository.find(
      { order: { name: "ASC" } }
    );
    return usersList;
  }
}

export { UsersRepository };
