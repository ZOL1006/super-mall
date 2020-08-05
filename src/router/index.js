import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Type = () => import('@/views/type/Type')
const Shop = () => import('@/views/shop/Shop')
const My = () => import('@/views/my/My')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/type',
    component: Type
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/my',
    component: My
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
