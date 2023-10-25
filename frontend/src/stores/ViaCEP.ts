import { defineStore } from 'pinia';

import axios from "axios";
import { useNotificationStore } from "@/stores/NotificationStore";

interface IViaCEPAddress {
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
}

export const useViaCEPDataStore = defineStore('viaCEPDataStore', () => {
  const notificationStore = useNotificationStore();

  const getAddressByCEP = async (cep : string) => {
    cep = cep.replace("-", "");

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${ cep }/json/`);
      const data : IViaCEPAddress = response.data;

      if(data.erro) {
        notificationStore.showNotification("Endereço inválido", 'error');
        return;
      }

      return data;
    } catch (error) {
      return;
    }
  }

  return { getAddressByCEP }
});