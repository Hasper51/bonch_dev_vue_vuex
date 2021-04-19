import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    children: [
      {path: '', component: UserProfile},
      {path: 'posts', component: UserPosts},
      

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
