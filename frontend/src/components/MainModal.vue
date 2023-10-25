<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center items-center p-2">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-xl">
          <div class="bg-white px-4 pb-4 pt-5 p-6 pb-4">

            <UserForm />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserForm from "@/components/UserForm.vue";
</script>