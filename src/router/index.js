import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"list",
    children:[
      {
        path:"list",
        name:"List",
        component: ()=>import('../views/list.vue')
      },{
        path:"article",
        name:"article",
        component: ()=>import('../views/article.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'My',
    component: ()=>import('../views/my.vue'),
  },
  {
    path: '/write',
    name: 'Write',
    component: ()=>import('../views/write.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
