import home from '@/pages/home.vue';

export const routeList = [
  {
    path: '/',
    name: 'home',
    meta: { userType: 1, menuName: '首页'},
    component: home
  },
  {
    name: 'about',
    path: '/about',
    meta: { userType: 1, menuName: '关于我们' },
    component: () => import('@/pages/about.vue')
  },
  {
    name: 'config',
    path: '/config',
    meta: { userType: 2, menuName: '配置页' },
    component: () => import('@/pages/config.vue')
  }
]