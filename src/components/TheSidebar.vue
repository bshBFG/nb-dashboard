<script setup lang="ts"></script>

<template>
  <div
    pos="fixed"
    top="0"
    left="0"
    h="full"
    w="75"
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
