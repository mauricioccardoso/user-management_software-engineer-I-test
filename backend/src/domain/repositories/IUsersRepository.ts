import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { User } from "@domain/entities/typeorm/User";

interface IUsersRepository {
  create({
    name,
    email,
    cpf,
    birthdate
  } : ICreateUserDTO) : Promise<User>;

  findById(id : string) : Promise<User>;

  findByEmail(email : string) : Promise<User>;

  findByCPF(cpf : string) : Promise<User>;

  list(): Promise<User[]>;
}

export { IUsersRepository };
