import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import MainLayout from '@/views/layouts/MainLayout'
import UserLayout from '@/views/layouts/userLayout'

import Login from '@/views/pages/auth/login'
import Home from '@/views/pages/home'
import About from '@/views/pages/about'
import Profile from '@/views/pages/user/profile'

Vue.use(Router)

const routerMap = [
  {
    path: '/',
    component: MainLayout,
    children: [
      // 首页
      {
        path: '/',
        name: 'home',
        component: Home
      },
      //关于我们
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
  },
  // 登录页面
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
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
