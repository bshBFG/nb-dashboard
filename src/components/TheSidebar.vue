<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar'
import { breakpointsTailwind } from '@vueuse/core'

const { md } = useBreakpoints(breakpointsTailwind)

const sidebar = useSidebarStore()

onBeforeMount(() => {
  md.value ? sidebar.show() : sidebar.hide()
})

watch(
  () => md.value,
  () => {
    !md.value ? sidebar.hide() : sidebar.show()
  }
)
</script>

<template>
  <transition>
    <div
      v-if="sidebar.isShow"
      class="fixed top-0 left-0 h-full w-75 z-20"
      display="flex"
      flex="col"
      bg="white"
      shadow="xl"
    >
      <div class="p-6">
        <TheLogo :with-text="true" />
      </div>
      <div class="flex-auto">
        <div class="p-4">
          <TheSidebarNav />
        </div>
      </div>
    </div>
  </transition>

  <Teleport to="body">
    <TheSidebarOverlay :isShow="sidebar.isShow && !md" @click="sidebar.hide" />
  </Teleport>
</template>

<i18n lang="yml">
en-US:
  Dashboard: Dashboard
  Media: Media
  Settings: Settings
ru-US:
  Dashboard: Панель управления
  Media: Медиа
  Settings: Настройки
</i18n>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}

.v-enter-to,
.v-leave-from {
  transform: translateX(0);
}
</style>
