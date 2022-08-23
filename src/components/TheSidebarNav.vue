<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar'

const { menu } = useSidebarStore()
</script>

<template>
  <div class="flex flex-col">
    <TheSidebarNavItem v-for="item in menu" :key="item.url" :item="item" />
  </div>
</template>
