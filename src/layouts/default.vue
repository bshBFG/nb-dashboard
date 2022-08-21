<template>
  <div display="flex" h="full" w="full" overflow="x-hidden">
    <div class="fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden">
      <div
        class="absolute top-0 left-0 h-screen w-screen overflow-hidden bg-slate-100"
      />
    </div>
    <TheSidebar />
    <div class="grid place-items-center h-full w-full ml-80">
      <div class="w-120 h-100 shadow-2xl rounded-md"><RouterView /></div>
    </div>
  </div>
</template>
