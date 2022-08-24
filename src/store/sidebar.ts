import { defineStore } from 'pinia'
export interface IMenuChildItem {
  title: string
  url: string
}

export interface IMenuItem {
  title: string
  url: string
  icon: string
  children?: Array<IMenuChildItem>
}

const defaultMenu = [
  { title: 'dashboard', url: '/', icon: 'i-tabler-dashboard' },
  {
    title: 'users',
    url: '/users',
    icon: 'i-tabler-users',
  },
  {
    title: 'media',
    url: '/media',
    icon: 'i-tabler-photo',
  },
  {
    title: 'settings',
    url: '/settings',
    icon: 'i-tabler-settings',
    children: [
      {
        title: 'general',
        url: '/settings/general',
      },
      {
        title: 'profile',
        url: '/settings/profile',
      },
    ],
  },
]

export const sidebarIcons = defaultMenu.map((i) => i.icon)

export const useSidebarStore = defineStore('dashboardStore', () => {
  const menu = ref<IMenuItem[]>(defaultMenu)

  const isShow = ref(false)

  const show = () => {
    isShow.value = true
  }

  const hide = () => {
    isShow.value = false
  }

  const toggle = () => {
    isShow.value = !isShow.value
  }

  return {
    menu,
    isShow,

    show,
    hide,
    toggle,
  }
})
