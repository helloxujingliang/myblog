<template>
    <div class="container">
        <div class="filter-container">
           <div style="height:40px;">
            <span style="float:left;">我的关注</span>
            <div class="operate">
                <span class="filter-btn">关注的用户</span>
                <span style="font-size:14px;color:#999;margin:0px 12px;">|</span>
                <span class="filter-btn">关注的专栏</span>
                <span style="font-size:14px;color:#999;margin:0px 12px;">|</span>
                <span class="filter-btn">关注的圈子</span>
            </div>
           </div>
           <div style="font-size:12px;color:#999;line-height:40px;text-align:right;">
            32个关注
           </div>
        </div>
        <div class="user" v-for="(item,index) in userlist" :key="index">
            <div class="image">
                <img :src="item.image" alt="">
            </div>
            <div class="user-name">
                <p class="name">{{item.name}} <img src="@/assets/images/level.png" width="32px" alt=""></p>
                <p class="work">{{item.work}}</p>
            </div>
            <div class="operate">
                <el-button type="warning" plain round  size="mini">取消关注</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Follow",
    data(){
        return {
            userlist:[
                {
                    name:"吃饭睡觉打代码",
                    work:"前端开发工程师",
                    image:"/images/photo/liuhui.png"
                },{
                    name:"百年孤独Html",
                    work:"前端开发工程师",
                    image:"/images/photo/tianfuwei.png"
                },{
                    name:"皮蛋solo粥",
                    work:"后端开发工程师",
                    image:"/images/photo/sunyanan.png"
                },{
                    name:"银河小铁骑",
                    work:"全干攻城狮",
                    image:"/images/photo/liuhui.png"
                },{
                    name:"詹姆斯梆硬",
                    work:"前端开发工程师",
                    image:"/images/photo/shiwenbin.png"
                },{
                    name:"吃饭睡觉打代码",
                    work:"前端开发工程师",
                    image:"/images/photo/pangchaoli.png"
                },{
                    name:"吃饭睡觉打代码",
                    work:"前端开发工程师",
                    image:"/images/photo/liuhui.png"
                },
            ]
        }
    }
}
</script>
<style scoped>
.container{
    width:724px;
    padding:20px;
    background:#fff;
    min-height: calc( 100vh - 140px)
}
.container .filter-container{
    width:724px;
    padding-bottom:20px;
    height:60px;
    border-bottom:1px solid #f1f3f5;

}
.container .filter-container .operate{
    float:left;
    margin-left:20px;
}
.container .filter-container .filter-btn{
    font-size:14px;
    color:#999;
}
.container .user{
    width:724px;
    height: 50px;
    padding:12px 0px;
    border-bottom:1px solid #f1f4f5;
}

.container .user .image{
    width:50px;
    height:50px;
    float:left;
    border-radius:50%;
}
.container .user .image img{
    width:50px;
    height:50px;
}
.container .user .user-name{
    float:left;
    margin-left:15px;
}
.container .user .user-name .name{
    font-size:14px;
    color:#333;
    margin:6px 0px;
}
.container .user .user-name .work{
    font-size:12px;
    color:#999;
    margin:4px 0px;
}
.container .user .operate{
    float:right;
    line-height:50px;
}
</style>