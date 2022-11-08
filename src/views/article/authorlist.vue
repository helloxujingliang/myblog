<template>
<div class="page-container">
    <div class="container">
        <div style="font-size:14px;color:#777;position:absolute;top:-44px;">查看榜单规则 </div>

        <div class="cate-box">
            <div class="cate-box-inner" >
                <el-link type="default" :underline="false" style="margin-right:12px;">前端开发</el-link>
                <el-link type="default" :underline="false" style="margin-right:12px;">后端开发</el-link>
                <el-link type="default" :underline="false" style="margin-right:12px;">服务部署</el-link>
                <el-link type="default" :underline="false" style="margin-right:12px;">开发工具</el-link>
                <el-link type="default" :underline="false" style="margin-right:12px;">地理信息</el-link>
            </div>
        </div>
        <!-- <div class="list-box"></div> -->
        <el-tabs  @tab-click="handleClick">
            <el-tab-pane label="本周排行" name="first"></el-tab-pane>
            <el-tab-pane label="本月排行" name="second"></el-tab-pane>
            <el-tab-pane label="年度排行" name="third"></el-tab-pane>
        </el-tabs>

        <div class="user"  v-for="item in 15" :key="item">
            <div class="count">
                {{item}}.
            </div>
            <div class="image">
                <img src="/images/photo/liuhui.png" width="36px" alt="">
            </div>
            <div class="user-info">
                <p class="user-name">
                    吃饭睡觉打豆豆
                    <img src="@/assets/images/level.png" width="38px" alt="">
                </p>
                <!-- <p class="user-desc">Web前端开发工程师 <span style="font-weight:bold;">&nbsp;·&nbsp;</span>IP属地： 山东省 <span style="font-weight:bold;">&nbsp;·&nbsp;</span> 已获得8343438次阅读 <span style="font-weight:bold;">&nbsp;·&nbsp;</span> 12389次点赞</p> -->
            </div>
            <div class="article-count">
                {{parseInt(Math.random()*100)}}&nbsp;篇文章
            </div>
            <div class="read-count">
                {{parseInt(Math.random()*100)+","+parseInt(Math.random()*1000)}}&nbsp;阅读
            </div>
            <div class="good-count">
                {{parseInt(Math.random()*100)+","+parseInt(Math.random()*1000)}}&nbsp;点赞
            </div>
            <div class="operate">
                <el-button type="success" size="mini" plain>关注</el-button>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style  scoped>
.page-container{
    width:100%;
    padding-top:61px;
}
.container{
    width:844px;
    margin:0px auto;
    background:#fff;
    border-radius:4px;
    padding:20px;
}
.cate-box{
  width:100%;
  height:45px;
  border-top:1px solid #f1f3f5;
  background:#fff;
  position:fixed;
  top:60px;
  left:0px;
  z-index:1000;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.cate-box .cate-box-inner{
  width:864px;
  margin:0px auto;
  height:45px;
  line-height: 40px;
}
.container .list-box{
    width:328px;
    height:500px;
    float:left;
    /* border:1px solid #fff; */
    background:#fff;
    border-radius:4px;
}
.container .user{
    padding:8px;
    height:40px;
    border-bottom:1px solid #f1f3f5;
    transition-delay: all 0.6s;
}
.container .user:hover{
    background:#fafafa;
}
.container .user .count{
    float:left;
    line-height:40px;
    font-size:14px;
    color:#777;
    width:40px;
    height:40px;
}
.container .user .image{
    width:40px;
    height:40px;
    float:left;
    border-radius: 50%;
}

.container .user .user-info{
    width:200px;
    height:40px;
    float:left;
    margin-left:15px;
}
.container .user .user-info .user-name{
    font-size:14px;
    line-height:40px;
    color:#777;
}
.container .user .user-info .user-desc{
    font-size:12px;
    color:#888;
}
.container .user .article-count{
    height:40px;
    padding:0px 20px;
    font-size:12px;
    color:#777;
    float:left;
    line-height:40px;
    width:100px;
}

.container .user .read-count{
    height:40px;
    padding:0px 20px;
    font-size:12px;
    color:#777;
    float:left;
    line-height:40px;
    width:100px;
}

.container .user .good-count{
    height:40px;
    padding:0px 20px;
    font-size:12px;
    color:#777;
    float:left;
    line-height:40px;
    width:100px;
}

.container .user  .operate{
    height:40px;
    float:right;
    line-height:40px;
}

.count{
    float:left;

}
::v-deep .el-tabs__nav-wrap::after{
    height:1px;
    background:#f1f3f5;
}
</style>