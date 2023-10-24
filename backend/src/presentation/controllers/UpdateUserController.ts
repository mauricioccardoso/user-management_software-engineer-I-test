import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "@application/userCases/UpdateUserUseCase";

class UpdateUserController {
  async handle(request : Request, response : Response) : Promise<Response> {
    const { id, name, email, cpf } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({ id, name, email, cpf });

    return response.status(204).send();
  }
}

export { UpdateUserController };
