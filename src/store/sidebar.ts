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

export const useSidebarStore = defineStore('dashboardMenu', () => {
  const menu = ref<IMenuItem[]>(defaultMenu)

  const route = useRoute()

  const submenu = computed<IMenuChildItem[] | null>(() => {
    return activeMenuItem.value?.children ?? null
  })

  const activeMenuItem = computed<IMenuItem | null>(() => {
    return menu.value.find((item) => route.path === item.url) ?? null
  })

  return { menu, activeMenuItem, submenu }
})
