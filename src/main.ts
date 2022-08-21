import { createApp } from 'vue'
import type { UserModule } from './type'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import 'uno.css'

const app = createApp(App)

Object.values(
  import.meta.glob<{ install: UserModule }>('./modules/**.ts', {
    eager: true,
  })
).forEach((i) => app.use(i.install))

app.mount('#app')
