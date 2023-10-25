import { defineStore } from 'pinia';
import type { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import httpClient from "@/http";

import { type Ref, ref } from "vue";
import type { IUsersData } from "@/interfaces/IUsersData";


export const useUsersDataStore = defineStore('usersDataStore', () => {
  const users : Ref<IUsersData[]> = ref([]);

  const getUsers = async () => {
    const respData : any = await httpClient.get('/users')
      .then(({ data } : AxiosResponse) => {
        return data;
      }).catch((error : AxiosError) => {
        return error;
      });

    if(!respData) {
      return;
    }

    users.value = respData.map((user : IUsersData) => {
      const date = new Date(user.birthdate);
      user.birthdate = new Intl.DateTimeFormat('pt-BR').format(date);
      return user;
    });
  }

  return { getUsers, users }
});