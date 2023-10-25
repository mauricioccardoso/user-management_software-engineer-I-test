<template>
  <MainHeader/>
  <main class="mt-2">
    <MainTable />
  </main>

  <div v-show="formCreateUserDataStore.isFormOpen">
    <MainModal />
  </div>
</template>

<script setup lang="ts">
import MainTable from "@/components/MainTable.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainModal from "@/components/MainModal.vue";
import { useFormCreateUserDataStore } from "@/stores/FormCreateUserData";

const formCreateUserDataStore = useFormCreateUserDataStore();
</script>
