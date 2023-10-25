import { defineStore } from 'pinia';

import { type Ref, ref } from "vue";
import axios from "axios";

interface IViaCEPAddress {
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
}

export const useViaCEPDataStore = defineStore('viaCEPDataStore', () => {
  const getAddressByCEP = async (cep : string) => {
    cep = cep.replace("-", "");

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${ cep }/json/`);
      const data : IViaCEPAddress = response.data;

      if(data.erro) {
        console.log("Error ao buscar endereço pelo cep informado");
        return;
      }

      return data;
    } catch (error) {
      return;
    }
  }

  return { getAddressByCEP }
});