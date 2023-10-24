import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "@application/userCases/UpdateUserUseCase";
import { AddressValidationService } from "@domain/services/AddressValidationService";
import { UpdateAddressUseCase } from "@application/userCases/UpdateAddressUseCase";

class UpdateUserController {
  async handle(request : Request, response : Response) : Promise<Response> {
    const { id: user_id, name, email, cpf, birthdate, address } = request.body;
    const { id: address_id, cep, number, street, neighborhood, city, state } = address;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updateAddressUseCase = container.resolve(UpdateAddressUseCase)
    const addressValidationService = container.resolve(AddressValidationService);

    await addressValidationService.execute(cep);

    await updateUserUseCase.execute({
      id: user_id,
      name,
      email,
      cpf,
      birthdate
    });

    await updateAddressUseCase.execute({
      id: address_id,
      cep,
      number,
      street,
      neighborhood,
      city,
      state,
      user_id: user_id
    });

    return response.status(204).send();
  }
}

export { UpdateUserController };
