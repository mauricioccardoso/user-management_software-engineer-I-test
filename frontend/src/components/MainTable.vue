<template>
  <div class="overflow-x-auto">
    <table class="border w-full border-gray-300">
      <thead>
      <tr>
        <th class="border border-gray-300 px-1 md:px-2">Nome</th>
        <th class="border border-gray-300 px-1 md:px-2">Email</th>
        <th class="border border-gray-300 px-1 md:px-2">CPF</th>
        <th class="border border-gray-300 px-1 md:px-2">Data de Nascimento</th>
        <th class="border border-gray-300 px-1 md:px-2">CEP</th>
        <th class="border border-gray-300 px-1 md:px-2">Número</th>
        <th class="border border-gray-300 px-1 md:px-2">Rua</th>
        <th class="border border-gray-300 px-1 md:px-2">Bairro</th>
        <th class="border border-gray-300 px-1 md:px-2">Cidade</th>
        <th class="border border-gray-300 px-1 md:px-2">Estado</th>
        <th class="border border-gray-300 px-1 md:px-2">Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in usersDataStore.users" :key="user.id">
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.name }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.email }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.cpf }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.birthdate }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.address.cep }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.address.number }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.address.street }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.address.neighborhood }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.address.city }}</td>
        <td class="border border-gray-300 px-1 md:px-2 text-sm text-center">{{ user.address.state }}</td>

        <td class="border border-gray-300 px-1 md:px-2 text-center">
          <button
              @click="formCreateUserDataStore.openModalEdit(user)"
              class="text-white text-sm font-bold bg-blue-600 rounded-lg px-1 hover:bg-blue-700">
            Editar
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useUsersDataStore } from "@/stores/UsersDataStore";
import { useFormCreateUserDataStore } from "@/stores/FormCreateUserData";

const usersDataStore = useUsersDataStore();
const formCreateUserDataStore = useFormCreateUserDataStore();

usersDataStore.getUsers();
</script>
