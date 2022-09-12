import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"home",
    children:[
      {
        path:"home",
        name:"Home",
        component: ()=>import('../views/home.vue'),
        redirect:"/home/list",
        meta:{
          name:'index'
        },
        children:[
          {
            path:"list",
            name:"List",
            component: ()=>import('../views/list.vue'),
            meta:{
              name:'article'
            }
          },
          {
            path:"article",
            name:"article",
            component: ()=>import('../views/article.vue'),
            meta:{
              name:'article'
            }
          },
        ]
      },{
        path: '/my',
        name: 'My',
        component: ()=>import('../views/my.vue'),
        meta:{
          name:'my'
        }
      },{
        path: '/write',
        name: 'Write',
        component: ()=>import('../views/write.vue'),
        meta:{
          name:'write'
        }
      },
    ]
  },{
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/login.vue'),
    meta:{
      name:'login'
    }
  },
  ,{
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/register.vue'),
    meta:{
      name:'register'
    }
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
