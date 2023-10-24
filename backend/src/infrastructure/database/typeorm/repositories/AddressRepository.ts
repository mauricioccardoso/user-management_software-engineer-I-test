import { Repository, getRepository } from "typeorm";

import { IAddressesRepository } from "@domain/repositories/IAddressesRepository";
import { Address } from "@domain/entities/typeorm/Address";
import { ICreateAddressesDTO } from "@application/DTO/ICreateAddressesDTO";

class AddressesRepository implements IAddressesRepository {
  private repository : Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({
    id,
    cep,
    number,
    street,
    neighborhood,
    state,
    city,
    user_id
  } : ICreateAddressesDTO) : Promise<void> {
    const address = this.repository.create({
      id,
      cep,
      number,
      street,
      neighborhood,
      state,
      city,
      user_id
    });
    await this.repository.save(address);
  }

  async findById(id : string) : Promise<Address> {
    const address: Address = await this.repository.findOne({ id });
    return address;
  }
}

export { AddressesRepository };
