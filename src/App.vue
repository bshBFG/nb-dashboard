<script setup lang="ts">
const { locale: currentLocale } = useI18n()
const locale = useStorage('locale', 'ru-RU')

onBeforeMount(() => {
  currentLocale.value = locale.value
})
</script>

<template>
  <RouterView />
</template>
