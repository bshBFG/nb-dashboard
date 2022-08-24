<script setup lang="ts">
import type { IMenuItem } from '@/store/sidebar'

export interface Props {
  item: IMenuItem
}

const props = defineProps<Props>()

const { t } = useI18n()

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
      class="mb-1 h-12 px-4 flex items-center rounded-lg text-sm transition duration-300 z-10"
      :class="
        isActive ? 'bg-blue-50 text-blue-500 font-semibold' : 'text-slate-500'
      "
      hover="bg-blue-50"
    >
      <span class="mr-4"><div class="h-5 w-5" :class="item.icon" /></span>
      <span>{{ t(`menu.${item.title}`) }}</span>
    </a>

    <template v-else>
      <div
        @click="toggleChildMenu"
        class="mb-1 h-12 px-4 flex items-center rounded-lg text-sm transition duration-300 cursor-pointer select-none z-10"
        :class="
          isChildMenuActive
            ? 'bg-blue-50 text-blue-500 font-semibold'
            : 'text-slate-500'
        "
        hover="bg-blue-50"
      >
        <span class="mr-4"><div class="h-5 w-5" :class="item.icon" /></span>
        <span>{{ t(`menu.${item.title}`) }}</span>
        <span class="ml-auto">
          <div
            class="i-tabler-chevron-right h-4 w-4"
            :class="isChildMenuActive ? 'rotate-90' : 'rotate-0'"
          />
        </span>
      </div>

      <Transition>
        <div
          v-if="isChildMenuActive"
          class="relative flex flex-col text-slate-500 z-0 overflow-hidden)"
        >
          <RouterLink
            v-for="child in item.children"
            :key="child.url"
            :to="child.url"
            class="mb-1 h-10 pl-4 flex items-center rounded-lg text-sm"
            hover="bg-blue-50"
            active-class="text-blue-400"
            v-slot="{ isActive }"
          >
            <span class="h-5 w-5 mr-4 grid place-items-center">
              <div
                class="h-1 w-1 rounded-full transition duration-300"
                :class="isActive ? 'scale-200 bg-blue-500' : 'bg-slate-500'"
              />
            </span>
            <span
              :class="
                isActive ? 'text-slate-700 font-semibold' : 'text-slate-500'
              "
              >{{ t(`menu.${child.title}`) }}</span
            >
          </RouterLink>
        </div>
      </Transition>
    </template>
  </RouterLink>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
