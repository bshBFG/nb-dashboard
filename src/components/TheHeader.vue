<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar'

const sidebar = useSidebarStore()
</script>

<template>
  <header class="w-full h-16 p-4 md:(h-25 p-6)">
    <div class="h-full w-full flex justify-self-end items-center gap-2">
      <button
        @click="sidebar.toggle"
        class="grid place-items-center h-10 w-10 mr-auto rounded-full transition duration-300 hover:(bg-slate-100)"
      >
        <div
          v-if="sidebar.isShow"
          class="i-tabler-align-left h-5 w-5 text-slate-500"
        />
        <div v-else class="i-tabler-menu-2 h-5 w-5 text-slate-500" />
      </button>

      <button
        class="grid place-items-center h-10 w-10 rounded-full transition duration-300 hover:(bg-slate-100)"
      >
        <div class="i-tabler-settings h-5 w-5 text-slate-500" />
      </button>

      <button
        class="grid place-items-center h-10 w-10 rounded-full transition duration-300 hover:(bg-slate-100)"
      >
        <div class="i-tabler-bell h-5 w-5 text-slate-500" />
      </button>

      <button class="h-10 w-10 rounded-full bg-teal-400"></button>
    </div>
  </header>
</template>
