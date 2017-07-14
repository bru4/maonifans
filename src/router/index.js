import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import HomeLayout from '@/views/layouts/homeLayout'
import MainLayout from '@/views/layouts/mainLayout'
import OtherLayout from '@/views/layouts/otherLayout'

import Login from '@/views/pages/auth/login'
import Home from '@/views/pages/home'
import About from '@/views/pages/about'
import Dashboard from '@/views/pages/dashboard'
import Profile from '@/views/pages/user/profile'
import Users from '@/views/pages/user/users'
import Category from '@/views/pages/category'

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
      { path: 'profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
      { path: 'category', name: 'category', component: Category, meta: { requiresAuth: true } },
      { path: 'users', name: 'users', component: Users, meta: { requiresAuth: true } }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: routerMap
})

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
