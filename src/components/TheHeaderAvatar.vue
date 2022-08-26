<script setup lang="ts">
import avatarDefault from '@/media/avatar-default.webp?w=200&h=200&webp&imagetools'

export interface Props {
  src?: string
}

defineProps<Props>()
</script>

<template>
  <img
    :src="src ?? avatarDefault"
    class="object-cover rounded-full overflow-hidden"
  />
</template>
