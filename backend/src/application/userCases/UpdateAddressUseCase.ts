import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreateAddressesDTO } from "@application/DTO/ICreateAddressesDTO";
import { IAddressesRepository } from "@domain/repositories/IAddressesRepository";

@injectable()
class UpdateAddressUseCase {
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
  } : ICreateAddressesDTO) : Promise<void> {
    const address = await this.addressesRepository.findById(id);

    if(!address) {
      throw new AppError("Endereço não existe");
    }

    address.cep = cep;
    address.number = number;
    address.street = street;
    address.neighborhood = neighborhood;
    address.city = city;
    address.state = state;

    await this.addressesRepository.create(address);
  }
}

export { UpdateAddressUseCase };
