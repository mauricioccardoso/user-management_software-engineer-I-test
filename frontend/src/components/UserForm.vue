<template>
  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Adicionar Usuário</h3>
  <form @submit.prevent="formCreateUserData.sendUserData()">
    <div class="grid md:grid-cols-2 gap-x-5 gap-y-2 2xl:gap-y-4 text-sm mt-4">

      <h3 class="col-span-2 mt-2 font-bold">
        Informações Pessoais
        <hr>
      </h3>

      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.name"
              id="name" name="name" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.email"
              id="email" name="email" type="email" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="cpf" class="block text-sm font-medium leading-6 text-gray-900">CPF</label>
        <div class="mt-1">
          <input
              @input="formatCPF"
              v-model="formCreateUserData.userFormData.cpf"
              id="cpf" name="cpf" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="birthdate" class="block text-sm font-medium leading-6 text-gray-900">Data de Nascimento</label>
        <div class="mt-1">
          <input
              @input="formatDate"
              v-model="formCreateUserData.userFormData.birthdate"
              id="birthdate" name="birthdate" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <h3 class="col-span-2 mt-4 font-bold">
        Endereço
        <hr>
      </h3>

      <div>
        <label for="cep" class="block text-sm font-medium leading-6 text-gray-900">CEP</label>
        <div class="mt-1">
          <input
              @input="formatCEP"
              v-model="formCreateUserData.userFormData.address.cep"
              id="cep" name="cep" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="number" class="block text-sm font-medium leading-6 text-gray-900">Número</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.address.number"
              id="number" name="number" type="number" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="street" class="block text-sm font-medium leading-6 text-gray-900">Rua</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.address.street"
              id="street" name="street" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="neighborhood" class="block text-sm font-medium leading-6 text-gray-900">Bairro</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.address.neighborhood"
              id="neighborhood" name="neighborhood" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Cidade</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.address.city"
              id="city" name="city" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

      <div>
        <label for="state" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
        <div class="mt-1">
          <input
              v-model="formCreateUserData.userFormData.address.state"
              id="state" name="state" type="text" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
        </div>
      </div>

    </div>
    <div class="sm:flex sm:flex-row-reverse mt-8 px-0">
      <FormButton
          label="Salvar"
          type="submit"
          class="bg-green-600 text-white hover:bg-green-500 sm:ml-3 sm:w-auto"
      >
      </FormButton>
      <FormButton
          @click="formCreateUserData.setFormOpen(false)"
          label="Cancelar"
          type="button"
          class="mt-3 bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 sm:mt-0 sm:w-auto"
      >
      </FormButton>
    </div>
  </form>

</template>

<script setup lang="ts">
import { useFormCreateUserDataStore } from "@/stores/FormCreateUserData";
import FormButton from "@/components/FormButton.vue";
import { useFormatFunctionsStore } from "@/stores/FormatFunctions";
import { watch } from "vue";
import { useViaCEPDataStore } from "@/stores/ViaCEP";

const formCreateUserData = useFormCreateUserDataStore();
const formatFunctionsStore = useFormatFunctionsStore();
const viaCEPDataStore = useViaCEPDataStore();

const formatCPF = (evt: Event) => {
  formCreateUserData.userFormData.cpf = formatFunctionsStore.formatCPF(evt.target.value);
}

const formatDate = (evt: Event) => {
  formCreateUserData.userFormData.birthdate = formatFunctionsStore.formatDate(evt.target.value);
}

const formatCEP = (evt: Event) => {
  formCreateUserData.userFormData.address.cep = formatFunctionsStore.formatCEP(evt.target.value);
}

watch(() => formCreateUserData.userFormData.address.cep, async (value, oldValue) => {
  if(value != '' && value.length === 9) {
    const address =await viaCEPDataStore.getAddressByCEP(value);

    formCreateUserData.userFormData.address.street = address?.logradouro;
    formCreateUserData.userFormData.address.neighborhood = address?.bairro;
    formCreateUserData.userFormData.address.city = address?.localidade;
    formCreateUserData.userFormData.address.state = address?.uf;
  }
})
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>