import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "@application/userCases/CreateUserUseCase";

class CreateUserController {
  async handle(request : Request, response : Response) : Promise<Response> {
    const { name, email, cpf } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      cpf
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
