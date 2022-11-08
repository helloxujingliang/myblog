<template>
    <div style="width:100%;height:1000px;background:;">
        <div class="container">
            <div class="top">
                <div class="user-photo">
                    <img src="/images/photo/liuhui.png" width="100px" alt="">
                </div>
                <div class="user-name">
                    <p style="margin:0px 0px;"> 吃饭睡觉打代码<img src="@/assets/images/level.png" width="40px" alt=""></p>
                    <p style="margin:12px 0px;font-size:13px;color:#777;">Web前端开发工程师    &nbsp; &nbsp; &nbsp; &nbsp;IP属地：山东省 &nbsp; &nbsp; &nbsp; &nbsp;加入时间：2022-10-24
                        <el-button type="primary" plain round size="small" style="float:right;">编辑个人资料</el-button>
                    </p>
                    <p style="margin:0px;font-size:13px;color:#777;">个人简介：ctrl + c , ctrl + v的好，下班下得早</p>
                </div>
            </div>
            <div class="data-container">
              
                    <div class="artilce-filter">
                        <div class="filter-menu" style="border-color:#409eef;">
                        <el-link type="primary" style="font-size:16px;" :underline="false">动态</el-link>
                        </div>
                        <div class="filter-menu">
                        <el-link type="default" style="font-size:16px;" :underline="false">帖子</el-link>
                        </div>
                        <div class="filter-menu">
                        <el-link type="default" style="font-size:16px;" :underline="false">文章</el-link>
                        </div>
                        <div class="filter-menu">
                        <el-link type="default" style="font-size:16px;" :underline="false">收藏</el-link>
                        </div>
                        <div class="filter-menu">
                        <el-link type="default" style="font-size:16px;" :underline="false">消息</el-link>
                        </div>
                        <div class="filter-menu">
                        <el-link type="default" style="font-size:16px;" :underline="false">关注</el-link>
                        </div>
                    </div>
                    <div class="data-list">
                        <div class="box" v-for="(item,index) in 15" :key="index" >
                            <p class="article-title" @click="$router.push({path:'/article'})">【MapBox GL】加载加载GeoJson图层</p>
                            <p class="article-desc">使用MapBox GL加载GeoJson点(circle)、线(line)、面(fill)、图标(symbol)、3D白膜(fill-excetion)图层……</p>
                            <p class="article-info">
                                <span style="margin-right:12px;"><i class="el-icon-collection-tag"></i>&nbsp;前端开发·MapBox GL</span>
                                <span><i class="el-icon-time"></i>&nbsp;2022-009-10 12:33</span>
                                <span style="margin:0px 24px;"><i class="el-icon-view"></i>&nbsp;448</span>
                                <!-- <el-tag size="mini" style="margin:0px 4px;">Vue2</el-tag>
                                <el-tag size="mini" style="margin:0px 4px;">mapbox gl</el-tag> -->
                                <span style="float:right;font-size:12px;">
                                <el-link style="font-size:12px;margin-right:6px;" type="default" :underline="false"> <strong style="color:#666;">#</strong>Vue2</el-link>
                                <el-link style="font-size:12px;margin-right:6px;"  type="default" :underline="false"> <strong style="color:#666;">#</strong>MapBox GL </el-link>
                                </span>
                            </p>
                        </div>
                    </div>
 
              
            </div>
        </div>
      
           
    
    </div>
</template>
<script>

export default {
    name:"UserHome",
    components:{
   
    }
}
</script>
<style scoped>
.container{
    width:1024px;
    margin:0px auto;
    background:#fff;
    padding:20px;
}
.container .top{
    width:1024px;
    height:120px;
}

.container .top .user-photo{
    width:100px;
    height:100px;
    border-radius: 50%;
    float:left;
    position:relative;
    top:20px;
}
.container .top .user-name{
    width:900px;
    float:left;
    height:60px;
    margin-left:20px;
    margin-top:40px;
}
.data-container{
    width:1024px;
    height:1000px;
    background:#fff;
    padding-top:40px;
    margin:0px auto;
}
.data-container .right{
    width:239px;
    float:right;
    height:500px;
    font-size:14px;
}

.data-container .left{
    float:left;
    width:740px;
    float:left;
}
.artilce-filter{
  line-height:40px;
  width:740px;
  height:42px;
  background:#fff;
  margin-bottom:15px;
  border-bottom:1px solid #f1f3f5;
}
.filter-menu{
  height:40px;
  margin:0px 24px;
  float:left;
  border-bottom:2px solid #fff;
}
.filter-menu:hover{
  border-color:#409eff;
}

 .data-list{
    width:740px;
    background:#fff;
 }
  .box{
    border-bottom:1px solid #f1f3f5;
    padding:10px 0px;
  }
 .box p{
  margin:0px;
}
.box .article-title{
  width:100%;
  height:40px;
  color:#333;
  font-size:15px;
  font-weight: bold;
}
.box .article-title:hover{
  text-decoration:underline;
}
.box .article-desc{
  width:100%;
  height:40px;
  font-size:13px;
  color:#999;
}

.box:hover{
  background:#fafafa;
  cursor:pointer;
}

.box .article-info{
  height:30px;
  font-size:13px;
  color:#999;
}
</style>