<script setup lang="ts">
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
  verified: boolean
  status: string
}

const users: User[] = [
  {
    id: 'a1',
    firstName: 'Jon',
    lastName: 'Snow',
    email: 'jon@snow.got',
    role: 'admin',
    verified: true,
    status: 'active',
  },
  {
    id: 'a2',
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    email: 'obi-wan@kenobi.sw',
    role: 'user',
    verified: false,
    status: 'active',
  },
  {
    id: 'a3',
    firstName: 'Hacker',
    lastName: 'Man',
    email: 'hacker@man.pro',
    role: 'user',
    verified: true,
    status: 'banned',
  },
]
</script>

<template>
  <table class="w-full">
    <thead class="bg-slate-50">
      <tr>
        <th class="p-4 font-semibold text-left">
          <div class="flex">
            <button class="h-10 w-10 grid place-items-center rounded-full">
              <div class="i-tabler-square h-5 w-5" />
            </button>
          </div>
        </th>
        <th class="p-4 font-semibold text-left">Name</th>
        <th class="p-4 font-semibold text-left">Email</th>
        <th class="p-4 font-semibold text-left">Role</th>
        <th class="p-4 font-semibold text-center">Verified</th>
        <th class="p-4 font-semibold text-left">Status</th>
        <th class="p-4 font-semibold text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="p-4">
          <button class="h-10 w-10 grid place-items-center rounded-full">
            <div class="i-tabler-square h-5 w-5" />
          </button>
        </td>
        <td class="p-4">{{ user.firstName }} {{ user.lastName }}</td>
        <td class="p-4">{{ user.email }}</td>
        <td class="p-4">{{ user.role }}</td>
        <td class="p-4 text-center">
          <div class="flex items-center justify-center">
            <div v-if="user.verified" class="i-tabler-circle-check h-5 w-5" />
            <div v-else class="i-tabler-clock h-5 w-5" />
          </div>
        </td>
        <td class="p-4">{{ user.status }}</td>
        <td class="p-4">
          <div class="flex items-center justify-center gap-2">
            <div class="i-tabler-trash h-5 w-5" />
            <div class="i-tabler-edit h-5 w-5" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
