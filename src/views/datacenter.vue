<template>
<div class="page-container">
    <div class="container">
        <div class="left-menu">
            <div class="user-box">
                <!-- <el-button type="primary" size="mini" plain round style="float:right;">编辑资料</el-button> -->
                <div class="user-photo">
                    <img src="/images/photo/liuhui.png" alt="">
                </div>
                <div class="user-name">
                    <p>吃饭睡觉打代码 <img src="@/assets/images/level.png" width="40px" alt=""></p>
                    <!-- <p style="font-size:12px;color:#888;">Web前端开发工程师&nbsp;&nbsp;&nbsp;IP属地：山东省</p> -->
                </div>
            </div>

            <!-- 菜单 -->
            <div class="menu-box-container">
                <div class="menu" v-for="(item,index) in menuList" :key="index" @click="$router.push({path:item.path});">
                    <p class="menu-title" @click="item.show = !item.show" >
                        <i :class="item.icon" ></i>
                        {{item.name}}
                        <span style="float:right;" v-show="item.child.length>0"><i :class="item.show ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i></span>
                    </p>
                    <ul class="menu-container" v-show="item.show"> 
                        <li v-for="(it,idx) in item.child" :key="idx" @click="toPage(it.path)" :style="{'color':$route.path == it.path ? '#1e80ff':'','background':$route.path == it.path ?'#e8f3ff':''}"><i :class="it.icon" style="font-weight:bold;">&nbsp;</i>{{it.name}}</li>
                    </ul>
                </div>
            </div>


            
        </div>
        <div class="right-container">
            <router-view/>
        </div>
    </div>
</div>

</template>
<script>
export default {
    name:"DataCenter",
    data(){
        return {
            currentPage:null,
            menuList:[
                {
                    icon:"el-icon-s-home",
                    name:"数据中心",
                    path:"/datacenter/report",
                    show:true,
                    child:[],
                },{
                    icon:"el-icon-s-order",
                    name:"数据管理",
                    path:"",
                    show:true,
                    child:[
                        {
                            icon:"el-icon-tickets",
                            name:"内容管理",
                            path:"",
                        },{
                            icon:"el-icon-chat-dot-round",
                            name:"评论管理",
                            path:"",
                        },{
                            icon:"el-icon-document-add",
                            name:"关注管理",
                            path:"/datacenter/follow",
                        },{
                            icon:"el-icon-star-off",
                            name:"收藏管理",
                            path:"",
                        },{
                            icon:"el-icon-s-home",
                            name:"点赞管理",
                            path:"",
                        }
                    ],
                }, {
                    icon:"el-icon-s-data",
                    name:"数据统计",
                    path:"",
                    show:true,
                    child:[],
                },{
                    icon:"el-icon-s-promotion",
                    name:"成长福利",
                    path:"",
                    show:true,
                     child:[
                        {
                            icon:"el-icon-date",
                            name:"每日签到",
                            path:"/datacenter/sigin",
                        },{
                            icon:"el-icon-s-data",
                            name:"成长等级",
                            path:"/datacenter/level",
                        },{
                            icon:"el-icon-s-goods",
                            name:"幸运抽奖",
                            path:"/datacenter/luckdraw",
                        },{
                            icon:"el-icon-coin",
                            name:"福利兑换",
                            path:"/datacenter/shops",
                        }
                    ],
                },{
                    icon:"el-icon-s-tools",
                    name:"个人设置",
                    path:"",
                    show:true,
                    child:[
                        {
                            icon:"el-icon-user-solid",
                            name:"个人资料",
                            path:"/datacenter/personal",
                        },{
                            icon:"el-icon-lock",
                            name:"账号设置",
                            path:"/datacenter/account",
                        },{
                            icon:"el-icon-s-home",
                            name:"消息设置",
                            path:"",
                        }
                    ],
                }
            ],
        }
    },
    created(){
  
    },
    methods:{
        toPage(path){
            this.$router.push(path);
        }

    }
}
</script>
<style scoped>
.page-container{
    width:100%;
    margin-top:15px;
}
.container{
    width:1024px;
    margin:0px auto;
}

.container .left-menu{
    width:240px;
    background:#fff;
    height: calc( 100vh - 90px);
    float:left;
    border-radius: 5px;
    position:fixed;
    top:76px;
}


.container .left-menu .user-box{
    width:240px;
    padding-top:20px;
    height:130px;
    /* border-bottom:1px solid #f1f3f5; */
}
.container .left-menu .user-box .user-photo{
    width:65px;
    height:65px;
    margin: 0px auto;
    border-radius: 50%;
}
.container .left-menu .user-box .user-photo img{
    width:65px;
    height:65px;
}
.container .left-menu .user-box .user-name{
    width:240px;
    height:40px;
    line-height:30px;
    text-align: center;
    color:#555;
}
.container .left-menu .menu-box-container{
    width:240px;
    height: calc(100% - 155px);
    overflow: auto;
    overflow-x:hidden;
}

.container .left-menu .menu-box-container::-webkit-scrollbar{
    background:rgba(0,0,0,0);
    width:4px;
    display: none;
}

.container .left-menu .menu-box-container::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.05);
  background-color:rgba(0,0,0,0.05);
}

.container .left-menu .menu{
    width:210px;
    padding:3px 15px;
}

.container .left-menu .menu .menu-title{
    width:190px;
    padding:0px 10px;
    height:42px;
    line-height:42px;
    font-size:14px;
    margin:0px;
    color:#8a919f;
    border-radius:4px;
}
.container .left-menu .menu .menu-title:hover{
    background:#e8f3ff;
    color:#1d7dfa;
    cursor:pointer;
}
.container .left-menu .menu .menu-title p{
    margin:0px;
}
.container .left-menu .menu ul{
    margin:0px;
    width:210px;
    list-style:none;
    padding:0px;
}
.container .left-menu .menu ul li{
    width:170px;
    padding-left:40px;
    height:42px;
    line-height:36px;
    font-size:14px;
    color:#8a919f;
    border-radius:4px;
    line-height:42px;
}
.container .left-menu .menu ul li:hover{
        background:#e8f3ff;
    color:#1d7dfa;
    cursor:pointer;
}
.container .right-container{
    width:764px;
    min-height:calc( 100vh - 100px);
    float:right;
    padding-bottom:15px;
    /* background:#fff; */
    /* border-radius: 5px; */
}
/* .container .right-container .data-title{
    padding:15px;
    width:734px;
    border-bottom:1px solid #f1f3f5;
}
.container .right-container  .data-container{
    padding:15px;
    width:734px;
} */

</style>