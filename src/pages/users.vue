<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <TheContent :title="t('users')">
    <div class="w-full border border-slate-100 bg-white rounded-xl shadow-xl">
      <div class="p-6 flex items-center justify-between">
        <div class="flex">
          <span class="font-semibold text-slate-800">{{
            t('userTable.totalUsers')
          }}</span>
          <span class="ml-2 font-semibold text-slate-600">3</span>
        </div>
        <div>
          <AppButton>{{ t('button.addUser') }}</AppButton>
        </div>
      </div>
      <UserTable></UserTable>
    </div>
  </TheContent>
</template>
