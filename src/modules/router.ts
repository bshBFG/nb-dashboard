import type { UserModule } from '@/type'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

export const install: UserModule = (app) => {
  const routes = setupLayouts(generatedRoutes)
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })

  app.use(router)
}
