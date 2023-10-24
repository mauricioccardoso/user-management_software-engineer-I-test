import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ViaCEPService } from "@infrastructure/services/ViaCEPService";

@injectable()
class AddressValidationService {
  constructor(
    @inject("ViaCEPService")
    private viaCEPService : ViaCEPService
  ) {}

  async execute(cep: string) : Promise<void>  {
    const address = await this.viaCEPService.getAddressViaCEP(cep);

    if(address.uf !== "AM") {
      throw new AppError("Invalid Address. Address must be located in Amazonas");
    }
  }
}

export { AddressValidationService };
