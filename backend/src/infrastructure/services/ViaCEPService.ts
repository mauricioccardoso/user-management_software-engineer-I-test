import axios from "axios";
import { AppError } from "@shared/errors/AppError";

interface IAddressResponse {
  cep : string;
  logradouro : string;
  bairro : string;
  localidade : string;
  uf : string;
  erro?: any
}

class ViaCEPService {
  async getAddressViaCEP(cep : string) : Promise<IAddressResponse> {
    cep = cep.replace("-", "");

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${ cep }/json/`);
      const address : IAddressResponse = response.data;

      if(address.erro) {
        throw new AppError("Address Not Found");
      }

      return address;
    } catch (error) {
      throw new AppError(`Error when retrieving address ViaCEP: ${ error.message }`);
    }
  }
}

export { ViaCEPService };