import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "@application/userCases/ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const usersList = await listUsersUseCase.execute();

    return response.json(usersList);
  }
}

export { ListUsersController };
