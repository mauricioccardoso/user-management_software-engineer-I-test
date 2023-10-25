import { defineStore } from 'pinia';


export const useFormatFunctionsStore = defineStore('formatFunctionsStore', () => {
  const formatCPF = (cpf : string) => {
    cpf = cpf.replace(/\D/g, '');

    cpf = cpf.substring(0, 11);

    cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    cpf = cpf.replace(/\.(\d{3})(\d)/, '.$1-$2');

    return cpf;
  };

  const formatDate = (date : string) => {
    date = date.replace(/\D/g, '');

    date = date.substring(0, 8);

    date = date.replace(/^(\d{2})(\d)/, '$1/$2');
    date = date.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');

    return date;
  };

  const formatCEP = (cep: string): string => {
    cep = cep.replace(/\D/g, '');

    cep = cep.substring(0, 8);

    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');

    return cep;
  };

  return { formatCPF, formatDate, formatCEP }
})