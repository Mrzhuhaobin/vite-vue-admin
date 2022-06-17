import { createRouter, createWebHistory } from "vue-router";
import layout from '@/pages/layout.vue';
import login from '@/pages/login.vue';
import { routeList } from "./routes";
import store from '@/store/index';
import { ElMessage as Message } from 'element-plus'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        ...routeList
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})


router.beforeEach((to, from) => {
  console.log('test', store.state.user)
  if (!store.state.user.userName && to.path !== '/login') {
    Message.error('请重新登陆')
    return {path: '/login'}
  }
  if (to.meta.userType && to.meta.userType > store.state.user.userType) {
    // console.log('权限不足', to.meta.userType, store.state.user.userType)
    Message.error('权限不足')
    return {path: from.path}
  }
})

export default router