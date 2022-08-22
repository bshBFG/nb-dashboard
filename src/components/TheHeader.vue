<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar'

const sidebar = useSidebarStore()
</script>

<template>
  <header class="w-full h-16 p-4 md:(h-25 p-6)">
    <div class="h-full w-full flex justify-self-end items-center gap-2">
      <button
        @click="sidebar.toggle"
        class="grid place-items-center h-10 w-10 mr-auto rounded-lg transition duration-300 hover:(bg-slate-200 shadow-lg)"
      >
        <div
          v-if="sidebar.isShow"
          class="i-mdi-menu-open h-6 w-6 text-slate-500"
        />
        <div v-else class="i-mdi-menu h-6 w-6 text-slate-500" />
      </button>

      <button
        class="grid place-items-center h-10 w-10 rounded-lg transition duration-300 hover:(bg-slate-200 shadow-lg)"
      >
        <div class="i-mdi-cog-outline h-6 w-6 text-slate-500" />
      </button>

      <button
        class="grid place-items-center h-10 w-10 rounded-lg transition duration-300 hover:(bg-slate-200 shadow-lg)"
      >
        <div class="i-mdi-bell-outline h-6 w-6 text-slate-500" />
      </button>

      <button
        class="h-10 w-10 rounded-xl bg-teal-400 shadow-lg md:(h-12 w-12)"
      ></button>
    </div>
  </header>
</template>
