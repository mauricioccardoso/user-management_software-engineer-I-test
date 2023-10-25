<template>
  <header>
    <div class="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl">Usuários</h1>

      <button
          @click="formCreateUserDataStore.setFormOpen(true)"
          class="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 ml-3 w-auto"
      >
        Adicionar
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useFormCreateUserDataStore } from "@/stores/FormCreateUserData";

const formCreateUserDataStore = useFormCreateUserDataStore();
</script>