import { container } from "tsyringe";

import "@infrastructure/container/providers"

import { UsersRepository } from "@infrastructure/database/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { IAddressesRepository } from "@domain/repositories/IAddressesRepository";
import { AddressesRepository } from "@infrastructure/database/typeorm/repositories/AddressRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IAddressesRepository>(
  "AddressesRepository",
  AddressesRepository
);