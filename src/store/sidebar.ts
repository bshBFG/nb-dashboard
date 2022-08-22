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
  { title: 'Dashboard', url: '/', icon: 'i-mdi-chart-pie' },
  {
    title: 'Media',
    url: '/media',
    icon: 'i-mdi-folder-multiple-image',
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: 'i-mdi-cog',
    children: [
      {
        title: 'General',
        url: '/settings/general',
      },
      {
        title: 'Profile',
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
