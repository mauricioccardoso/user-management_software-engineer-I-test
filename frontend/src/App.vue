<script setup lang="ts">
import { RouterView } from 'vue-router'

import NotificationCard from "@/components/NotificationCard.vue";
import { useNotificationStore } from "@/stores/NotificationStore";

const notificationStore = useNotificationStore();
</script>

<template>
  <div class="container mx-auto px-2">
    <RouterView />

    <NotificationCard v-show="notificationStore.notification?.message"/>
  </div>
</template>
