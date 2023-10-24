import { container } from "tsyringe";

import "@infrastructure/container/providers"

import { UsersRepository } from "@infrastructure/database/typeorm/repositories/UserRepository";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);