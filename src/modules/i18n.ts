import type { UserModule } from '@/type'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export const install: UserModule = (app) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    messages,
  })

  app.use(i18n)
}
