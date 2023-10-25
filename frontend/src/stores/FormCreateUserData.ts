import { defineStore } from 'pinia';

import { type Ref, ref } from "vue";
import type { IUsersData } from "@/interfaces/IUsersData";
import httpClient from "@/http";
import { useUsersDataStore } from "@/stores/UsersDataStore";
import { useNotificationStore } from "@/stores/NotificationStore";


export const useFormCreateUserDataStore = defineStore('formCreateUserDataStore', () => {
  const usersDataStore = useUsersDataStore();
  const notificationStore = useNotificationStore();

  const userFormData : Ref<IUsersData> = ref({
    address: {}
  });
  const isFormOpen = ref(false);

  const setFormOpen = (value : boolean) => {
    isFormOpen.value = value;
    clearForm();
  }

  const openModalEdit = (user : IUsersData) => {
    setFormOpen(true);

    userFormData.value.id = user.id;
    userFormData.value.name = user.name;
    userFormData.value.cpf = user.cpf;
    userFormData.value.email = user.email;
    userFormData.value.birthdate = user.birthdate;

    userFormData.value.address.id = user.address.id;
    userFormData.value.address.cep = user.address.cep;
    userFormData.value.address.number = user.address.number;
    userFormData.value.address.street = user.address.street;
    userFormData.value.address.neighborhood = user.address.neighborhood;
    userFormData.value.address.city = user.address.city;
    userFormData.value.address.state = user.address.state;
  }

  const sendUserData = async () => {

    let response;

    if(!userFormData.value.address.id) {
      response = await httpClient.post("/users", userFormData.value)
        .then(({ data }) => {
          return data;
        }).catch((error) => {
          return error;
        })
    } else {
      response = await httpClient.put("/users", userFormData.value)
        .then(({ data }) => {
          return data;
        }).catch((error) => {
          return error;
        })
    }

    if(response?.code) {
      notificationStore.showNotification(response.response.data.message, 'error');
      return;
    }

    notificationStore.showNotification("Usuário salvo com sucesso", 'success');

    await usersDataStore.getUsers();
    setFormOpen(false);
  }

  const clearForm = () => {
    userFormData.value.id = "";
    userFormData.value.name = "";
    userFormData.value.cpf = "";
    userFormData.value.email = "";
    userFormData.value.birthdate = "";

    userFormData.value.address.id = "";
    userFormData.value.address.cep = "";
    userFormData.value.address.number = null;
    userFormData.value.address.street = "";
    userFormData.value.address.neighborhood = "";
    userFormData.value.address.city = "";
    userFormData.value.address.state = "";
  }

  return { userFormData, isFormOpen, setFormOpen, sendUserData, openModalEdit }
});