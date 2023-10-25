<template>
  <button
      :type="type"
      class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">

defineProps<{
  label: string
  type: string
}>()

</script>