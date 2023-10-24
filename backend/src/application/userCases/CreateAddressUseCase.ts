import { inject, injectable } from "tsyringe";

import { IAddressesRepository } from "@domain/repositories/IAddressesRepository";
import { ICreateAddressesDTO } from "@application/DTO/ICreateAddressesDTO";

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject("AddressesRepository")
    private addressesRepository : IAddressesRepository,
  ) {
  }

  async execute({
    id,
    cep,
    number,
    street,
    neighborhood,
    city,
    state,
    user_id
  } : ICreateAddressesDTO) : Promise<void> {

    await this.addressesRepository.create({
      id,
      cep,
      number,
      street,
      neighborhood,
      city,
      state,
      user_id
    });
  }
}

export { CreateAddressUseCase };
