import { Request, Response } from "express";
import { container } from "tsyringe";
import { getManager } from "typeorm";

import { AddressValidationService } from "@domain/services/AddressValidationService";
import { CreateUserUseCase } from "@application/userCases/CreateUserUseCase";
import { CreateAddressUseCase } from "@application/userCases/CreateAddressUseCase";
import { AppError } from "@shared/errors/AppError";

class CreateUserController {
  async handle(request : Request, response : Response) : Promise<Response> {
    const { name, email, cpf, birthdate, address } = request.body;
    const { cep, number, street, neighborhood, city, state } = address;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const createAddressUseCase = container.resolve(CreateAddressUseCase);
    const addressValidationService = container.resolve(AddressValidationService);

    await addressValidationService.execute(cep);

    try {
      await getManager().transaction(async transactionalEntityManager => {
        const user = await createUserUseCase.execute({
          name,
          email,
          cpf,
          birthdate
        });

        await createAddressUseCase.execute({
          cep,
          number,
          street,
          neighborhood,
          city,
          state,
          user_id: user.id
        });
      });
    } catch (error) {
      throw new AppError(error.message);
    }

    return response.status(201).send();
  }
}

export { CreateUserController };
