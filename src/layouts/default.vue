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
        class="absolute top-0 left-0 h-screen w-screen overflow-hidden bg-white"
      />
    </div>

    <TheSidebar />

    <div
      class="flex flex-col h-full w-full transition duration-300"
      :class="md && sidebar.isShow && 'ml-70'"
    >
      <TheHeader />

      <TheBody class="flex-auto">
        <RouterView />
      </TheBody>
    </div>
  </div>
</template>
