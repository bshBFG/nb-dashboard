<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar'
import { breakpointsTailwind } from '@vueuse/core'

const { md } = useBreakpoints(breakpointsTailwind)
const sidebar = useSidebarStore()
</script>

<template>
  <div display="flex" h="full" w="full" overflow="x-hidden">
    <div class="fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden">
      <div
        class="absolute top-0 left-0 h-screen w-screen overflow-hidden bg-slate-100"
      />
    </div>

    <TheSidebar />

    <div
      class="flex flex-col h-full w-full transition duration-300"
      :class="md && sidebar.isShow && 'ml-75'"
    >
      <TheHeader />
      <div class="flex-auto bg-white h-7xl min-h-7xl"><RouterView /></div>
    </div>
  </div>
</template>
