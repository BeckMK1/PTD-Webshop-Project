import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/clothing',
    name:'Clothing',
    component: () => import(/* webpackChunkName: "about" */ '../views/clothing')
  },
  {
  path: '/details/:Pid',
  name: 'details',
  component: () => import(/* webpackChunkName: "about" */ '../components/details')
  },
  {
    path: '/basket',
    name:'basket',
    component: () => import(/* webpackChunkName: "about" */ '../views/basket')
  },
{
  path:'/weapon',
  name:'Weapon',
  component: () => import(/* webpackChunkName: "about" */ '../views/weapon')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
