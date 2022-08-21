<script setup lang="ts">
import { useCounterStore } from '@/store/counter.js'

const { t, availableLocales, locale: currentLocale } = useI18n()
const locale = useStorage('locale', 'ru-RU')

const counter = useCounterStore()

const toggleLocales = () => {
  const locales = availableLocales
  currentLocale.value =
    locales[(locales.indexOf(locale.value) + 1) % locales.length]
  locale.value = currentLocale.value
}
</script>

<template>
  <div
    w="full"
    h="full"
    display="flex"
    flex="col"
    p="6"
    space="y-4"
    class="items-center"
  >
    <h1 text="2xl">{{ t('page.home') }}</h1>
    <div>
      <span>{{ counter.count }}</span>
    </div>
    <div class="flex gap-4">
      <AppButton @click="counter.decrement">Decrease</AppButton>
      <AppButton @click="counter.increment">Increase</AppButton>
    </div>
    <div>
      <AppButton @click="toggleLocales">
        <div class="i-mdi-language" />
      </AppButton>
    </div>
  </div>
</template>

<!-- <route lang="yaml">
meta:
  layout: default
</route> -->
