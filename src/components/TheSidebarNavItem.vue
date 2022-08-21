<script setup lang="ts">
import type { IMenuItem } from '@/store/sidebar'

export interface Props {
  item: IMenuItem
}

const props = defineProps<Props>()

const route = useRoute()

const isItemPathInRoute = computed(() => route.path.includes(props.item.url))
const isChildMenuOpen = ref(isItemPathInRoute.value)
const isChildMenuActive = computed(() => isChildMenuOpen.value)

const toggleChildMenu = () => {
  isChildMenuOpen.value = !isChildMenuOpen.value
}
</script>

<template>
  <RouterLink :to="item.url" custom v-slot="{ href, navigate, isActive }">
    <a
      v-if="!item.children"
      :href="href"
      @click="navigate"
      class="flex items-center h-12 px-4 text-slate-500 transition duration-300 hover:(bg-blue-50 shadow-blue-200 shadow-md)"
      :class="isActive && 'bg-blue-50 shadow-blue-200 shadow-md'"
    >
      <span class="mr-2"><div :class="item.icon" /></span>
      <span>{{ item.title }}</span>
    </a>

    <template v-else>
      <div
        @click="toggleChildMenu"
        class="flex items-center h-12 px-4 text-slate-500 transition duration-300 cursor-pointer select-none"
        hover="bg-blue-50 shadow-blue-200 shadow-md"
        :class="isChildMenuActive && 'bg-blue-50 shadow-blue-200 shadow-md'"
      >
        <span class="mr-2"><div :class="item.icon" /></span>
        <span>{{ item.title }}</span>
        <span class="ml-auto">
          <div v-if="isChildMenuActive" class="i-mdi-chevron-down" />
          <div v-else class="i-mdi-chevron-up" />
        </span>
      </div>

      <div
        v-if="isChildMenuActive"
        class="relative flex flex-col gap-2 text-slate-500 after:(content-empty absolute left-6 top-0 h-full w-px -z-10 bg-slate-300)"
      >
        <RouterLink
          v-for="child in item.children"
          :key="child.url"
          :to="child.url"
          class="flex items-center h-12 pl-10"
          hover="text-blue-400"
          active-class="text-blue-400"
        >
          <span>{{ child.title }}</span>
        </RouterLink>
      </div>
    </template>
  </RouterLink>
</template>
