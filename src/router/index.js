import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const HomeLayout = r => require.ensure([], () => r(require('@/views/layouts/homeLayout')), 'layout')
const MainLayout = r => require.ensure([], () => r(require('@/views/layouts/mainLayout')), 'layout')
const OtherLayout = r => require.ensure([], () => r(require('@/views/layouts/OtherLayout')), 'layout')

const Login = r => require.ensure([], () => r(require('@/views/pages/auth/login')), 'other')
const Home = r => require.ensure([], () => r(require('@/views/pages/home')), 'other')
const About = r => require.ensure([], () => r(require('@/views/pages/about')), 'other')
const Dashboard = r => require.ensure([], () => r(require('@/views/pages/dashboard')), 'panel')
const Brand = r => require.ensure([], () => r(require('@/views/pages/brand')), 'panel')
const Profile = r => require.ensure([], () => r(require('@/views/pages/user/Profile')), 'panel')
const Users = r => require.ensure([], () => r(require('@/views/pages/user/users')), 'panel')
const Category = r => require.ensure([], () => r(require('@/views/pages/category')), 'panel')

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
      { path: 'brand', name: 'brand', component: Brand, meta: { requiresAuth: true } },
      { path: 'profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
      { path: 'category', name: 'category', component: Category, meta: { requiresAuth: true } },
      { path: 'users', name: 'users', component: Users, meta: { requiresAuth: true } },
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
