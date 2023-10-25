import { defineStore } from 'pinia';

import { type Ref, ref } from "vue";
import type { IUsersData } from "@/interfaces/IUsersData";
import httpClient from "@/http";
import { useUsersDataStore } from "@/stores/UsersDataStore";


export const useFormCreateUserDataStore = defineStore('formCreateUserDataStore', () => {
  const usersDataStore = useUsersDataStore();

  const userFormData : Ref<IUsersData> = ref({
    address: {}
  });
  const isFormOpen = ref(true);

  const setFormOpen = (value : boolean) => {
    isFormOpen.value = value;
    clearForm();
  }

  const clearForm = () => {
    userFormData.value.name = '';
    userFormData.value.cpf = '';
    userFormData.value.email = '';
    userFormData.value.birthdate = '';

    userFormData.value.address.cep = "";
    userFormData.value.address.number = null;
    userFormData.value.address.street = "";
    userFormData.value.address.neighborhood = "";
    userFormData.value.address.city = "";
    userFormData.value.address.state = "";
  }

  const sendUserData = async () => {
    const resp = await httpClient.post("/users", userFormData.value)
      .then(({ data }) => {
        usersDataStore.getUsers();
        setFormOpen(false);
        return data;
      })
      .catch((error) => {
        console.log(error)
        return error
      });


    if(resp?.code) {
      console.log("Falha ao salvar: " + resp.response.data.message);
      return;
    }
  }

  return { userFormData, isFormOpen, setFormOpen, sendUserData }
});