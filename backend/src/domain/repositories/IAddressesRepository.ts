import { ICreateAddressesDTO } from "@application/DTO/ICreateAddressesDTO";

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
}

export { IAddressesRepository };
