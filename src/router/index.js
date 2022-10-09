import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"/",
        name:"Index",
        meta:{
          name:'index',
          title:"首页"
        },
        component: ()=>import('../views/Home.vue'),
      },{
        path:"article",
        name:"article",
        component: ()=>import('../views/article.vue'),
        meta:{
          name:'article'
        }
      },{
        path:"feelfish",          //上班摸鱼
        name:"feelfish",
        component: ()=>import('../views/feelfish.vue'),
        meta:{
          name:'feelfish',
          title:"上班摸鱼"
        }
      },{
        path:"cate",
        name:"cate",
        component: ()=>import('../views/cate.vue'),
        meta:{
          name:'cate',
          title:"文章分类"
        }
      },{
        path:"link",
        name:"link",
        component: ()=>import('../views/link.vue'),
        meta:{
          name:'link',
          title:"常用链接",
        }
      },{
        path:"tag",
        name:"tag",
        component: ()=>import('../views/tag.vue'),
        meta:{
          name:'tag',
          title:"热门标签",
        }
      },{
        path:"study",
        name:"study",
        component: ()=>import('../views/study.vue'),
        meta:{
          name:'study',
          title:"课程"
        }
      },{
        path: '/activity',
        name: 'Activity',
        component: ()=>import('../views/activity.vue'),
        meta:{
          name:'activity',
          title:"活动中心"
        }
      },{
        path: '/job',
        name: 'Job',
        component: ()=>import('../views/job.vue'),
        meta:{
          name:'job',
          title:"工作招聘"
        }
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

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
  mode:"history",
  routes
})

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
});


export default router
