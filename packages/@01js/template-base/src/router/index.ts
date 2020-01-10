import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('../views/Redirect/index.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/Home/index.vue'),
        name: 'Home',
        meta: { title: 'Home', icon: 'home', affix: true }
      }
    ]
  }
]

const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
