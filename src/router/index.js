import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import HomeLayout from '@/views/layouts/homeLayout'
import MainLayout from '@/views/layouts/mainLayout'
import OtherLayout from '@/views/layouts/otherLayout'

import Login from '@/views/pages/auth/login'
import Home from '@/views/pages/home'
import About from '@/views/pages/about'
import Profile from '@/views/pages/user/profile'
import Dashboard from '@/views/pages/dashboard'
import Test from '@/views/pages/dashboard'

Vue.use(Router)

const routerMap = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'about', name: 'about', component: About }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/panel',
    component: MainLayout,
    redirect: 'dashboard',
    children: [
      { path: 'dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
      { path: 'test', name: 'test', component: Test, meta: { requiresAuth: true } }
    ]
  }
]

const router = new Router({mode: 'history', routes: routerMap})

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录
  if (to.meta.requiresAuth) {
    if (store.getters.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到该路由
        }
      })
    }
  } else {
    if (!to.meta.requiresAuth && to.path === '/login' && !(store.getters.token === null)) {
      next({path: '/'})
    } else {
      next()
    }
  }
})

export default router
