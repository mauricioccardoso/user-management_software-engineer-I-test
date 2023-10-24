import { ICreateAddressesDTO } from "@application/DTO/ICreateAddressesDTO";
import { Address } from "@domain/entities/typeorm/Address";

interface IAddressesRepository {
  create({
    cep,
    number,
    street,
    neighborhood,
    city,
    state,
    user_id,
  } : ICreateAddressesDTO) : Promise<void>;

  findById(id : string) : Promise<Address>;
}

export { IAddressesRepository };
