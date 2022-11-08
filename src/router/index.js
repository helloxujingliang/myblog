import { FALSE } from 'sass'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      name:'index',
      title:"首页",
      childMenu:true
    },
    children:[
      {
        path:"/",
        name:"Index",
        meta:{
          name:'index',
          title:"首页",
          childMenu:true
        },
        component: ()=>import('../views/article/home.vue'),
      },{
        path:"article",
        name:"article",
        component: ()=>import('../views/article/article.vue'),
        meta:{
          name:'article',
          childMenu:false
        }
      },{
        path:"articlelist",
        name:"articlelist",
        component: ()=>import('../views/article/articlelist.vue'),
        meta:{
          name:'articlelist',
          title:"文章排行榜",
          childMenu:true
        },
      },{
        path:"authorlist",
        name:"authorlist",
        component: ()=>import('../views/article/authorlist.vue'),
        meta:{
          name:'authorlist',
          title:"作者排行榜",
          childMenu:true
        },
      },{
        path:"feelfish",          //上班摸鱼
        name:"feelfish",
        component: ()=>import('../views/feelfish/feelfish.vue'),
        meta:{
          name:'feelfish',
          title:"上班摸鱼",
          childMenu:true
        }
      },{
        path:"circle",          //上班摸鱼
        name:"circle",
        component: ()=>import('../views/feelfish/circle.vue'),
        meta:{
          name:'circle',
          title:"圈子",
          childMenu:false
        }
      },{
        path:"topic",          //上班摸鱼
        name:"topic",
        component: ()=>import('../views/feelfish/topic.vue'),
        meta:{
          name:'circle',
          title:"圈子",
          childMenu:false
        }
      },{
        path:"circledetail",          //上班摸鱼
        name:"circledetail",
        component: ()=>import('../views/circleTopicDetail.vue'),
        meta:{
          name:'circledetail',
          title:"圈子详情",
          childMenu:false
        }
      },
      {
        path:"/usercenter",          //数据中心
        name:"usercenter",
        component: ()=>import('../views/usercenter.vue'),
        meta:{
          name:'usercenter',
          title:"数据中心",
          childMenu:false
        },

      },{
        path:"userhome",          //上班摸鱼
        name:"userhome",
        component: ()=>import('../views/userhome.vue'),
        meta:{
          name:'userhome',
          title:"个人主页",
          childMenu:false
        }
      },{
        path:"datacenter",          //上班摸鱼
        name:"datacenter",
        component: ()=>import('../views/datacenter.vue'),
        meta:{
          name:'datacenter',
          title:"数据中心",
          childMenu:false
        },
        children:[
          {
            path:"report",
            name:"Report",
            meta:{
              name:'report',
              title:"数据统计",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/report.vue'),
          },
          {
            path:"follow",
            name:"follow",
            meta:{
              name:'follow',
              title:"我的关注",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/follow.vue'),
          },
          {
            path:"sigin",
            name:"Sigin",
            meta:{
              name:'sigin',
              title:"每日签到",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/sigin.vue'),
          }, {
            path:"level",
            name:"level",
            meta:{
              name:'level',
              title:"成长等级",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/level.vue'),
          }, {
            path:"luckdraw",
            name:"luckdraw",
            meta:{
              name:'sigin',
              title:"幸运抽奖",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/luckdraw.vue'),
          },{
            path:"shops",
            name:"Shops",
            meta:{
              name:'shops',
              title:"福利兑换",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/shops.vue'),
          },{
            path:"goods",
            name:"goods",
            meta:{
              name:'goods',
              title:"兑换详情",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/goods.vue'),
          },
          {
            path:"personal",
            name:"personal",
            meta:{
              name:'sigin',
              title:"个人资料",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/personal.vue'),
          },{
            path:"account",
            name:"account",
            meta:{
              name:'account',
              title:"账号设置",
              childMenu:false,
            },
            component: ()=>import('../views/datacenter/account.vue'),
          },
        ],
      },
      // {
      //   path:"personal",          //上班摸鱼
      //   name:"personal",
      //   component: ()=>import('../views/personal.vue'),
      //   meta:{
      //     name:'personal',
      //     title:"个人设置",
      //     childMenu:false
      //   }
      // },
      {
        path:"cate",
        name:"cate",
        component: ()=>import('../views/article/cate.vue'),
        meta:{
          name:'cate',
          title:"文章分类"
        }
      },{
        path:"catedetail",
        name:"catedetail",
        component: ()=>import('../views/article/catedetail.vue'),
        meta:{
          name:'catedetail',
          title:"专栏详情"
        }
      },{
        path:"link",
        name:"link",
        component: ()=>import('../views/article/link.vue'),
        meta:{
          name:'link',
          title:"常用链接",
        }
      },{
        path:"tag",
        name:"tag",
        component: ()=>import('../views/article/tag.vue'),
        meta:{
          name:'tag',
          title:"热门标签",
        }
      },{
        path:"study",
        name:"study",
        component: ()=>import('../views/study/study.vue'),
        meta:{
          name:'study',
          title:"课程",
          childMenu:true
        }
      },{
        path: '/activity',
        name: 'Activity',
        component: ()=>import('../views/activity/activity.vue'),
        meta:{
          name:'activity',
          title:"活动中心",
          childMenu:true
        }
      },{
        path:"about",
        name:"about",
        component: ()=>import('../views/about/about.vue'),
        meta:{
          name:'about',
          title:"关于我们",
          childMenu:false
        }
      },{
        path: '/job',
        name: 'Job',
        component: ()=>import('../views/job.vue'),
        meta:{
          name:'job',
          title:"工作招聘",
          childMenu:true
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
    component: ()=>import('../views/base/login.vue'),
    meta:{
      name:'login'
    }
  },
  ,{
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/base/register.vue'),
    meta:{
      name:'register'
    }
  }
]

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
  // mode:"history",
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
