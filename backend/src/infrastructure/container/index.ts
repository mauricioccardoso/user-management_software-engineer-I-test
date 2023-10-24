import { container } from "tsyringe";

import "@infrastructure/container/providers"

import { UsersRepository } from "@infrastructure/database/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { IAddressesRepository } from "@domain/repositories/IAddressesRepository";
import { AddressesRepository } from "@infrastructure/database/typeorm/repositories/AddressRepository";
import { ViaCEPService } from "@infrastructure/services/ViaCEPService";
import { AddressValidationService } from "@domain/services/AddressValidationService";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IAddressesRepository>(
  "AddressesRepository",
  AddressesRepository
);

container.registerSingleton(
  "ViaCEPService",
  ViaCEPService
);

container.registerSingleton(
  "AddressValidationService",
  AddressValidationService
);