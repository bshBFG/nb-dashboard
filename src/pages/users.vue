<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <TheContent :title="t('users')">
    <div
      class="h-full w-full border border-slate-100 bg-white rounded-xl shadow-xl"
    >
      <AppTable></AppTable>
    </div>
  </TheContent>
</template>
