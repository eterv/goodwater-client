import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import { navList } from '@/config'
import store from '@/store'

const LayoutDefault = () => import('./layouts/LayoutDefault.vue')
const LayoutEmpty = () => import('./layouts/LayoutEmpty.vue')

//import Stopwatch from './views/Stopwatch.vue'

const pages = navList.map<RouteRecordRaw>(({ name, href }) => {
  return {
    path: href,
    name,
    component: () => import(/* @vite-ignore */ `./views/${name}.vue`),
  }
})

const routes: RouteRecordRaw[] = [
  // 일반 페이지 라우팅 정의
  { path: '/', name: 'Home', component: Home },
  {
    path: '/',
    component: LayoutDefault,
    children: [...pages],
  },

  //{ path: '/test1', name: 'TestPage1', component: TestPage1 },

  {
    path: '/',
    component: LayoutEmpty,
    children: [
      {
        path: 'signin',
        name: 'Signin',
        component: () => import(`./views/Signin.vue`),
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import(`./views/Signup.vue`),
      },
    ],
  },

  {
    path: '/',
    component: LayoutDefault,
    meta: {
      requiresAuth: true,
      admin: true,
    },
    children: [
      {
        path: '/contact/list',
        name: 'ContactList',
        component: () => import(`./views/contact/List.vue`),
      },
    ],
  },

  // 404 페이지 없음
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      layout: 'LayoutEmpty',
    },
  },

  // 자동 리다이렉트
  { path: '/home', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),

  routes,

  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})

router.beforeEach(async (to, _from, next) => {
  // 사용자 로그온 여부 확인
  await store.dispatch('auth/initAuth')

  const isAuth: boolean = store.getters['auth/isAuthenticated']
  const requiresAuth = to.meta.requiresAuth ?? false

  if (requiresAuth) {
    if (!isAuth) {
      const redirect = encodeURIComponent(to.path)
      next(`/signin?redirect=${redirect}`)
    }

    const admin = to.meta.admin ?? false
    const isAdmin: boolean = store.getters['auth/isAdmin']
    if (admin && !isAdmin) {
      next('/')
    }
  }

  // guestOnly

  next()
})

router.afterEach(async (to) => {
  await store.dispatch('global/setRouteInfo', to)
})

export default router
