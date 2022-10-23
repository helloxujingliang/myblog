<template>
    <div class="container">
        <div class="user-card">
            <div class="user-image">
                <img src="/images/photo/liuhui.png" alt="">
            </div>
            <div class="user-info">
                <p class="user-name" >吃饭睡觉打代码
                    <img src="@/assets/images/level.png" width="48px" alt="">

                    <span style="float:right;">
                        <img src="/images/csdn.png" alt="" width="18px" style="margin:0px 8px;">
                        <img src="/images/github.png" alt="" width="18px" style="margin:0px 8px;">
                        <img src="/images/gitee.png" alt="" width="18px" style="margin:0px 8px;">
                        <img src="/images/weibo.png" alt="" width="18px" style="margin:0px 8px;">
                    </span>
                </p>
                <p style="font-size:14px;color:#777;">
                    <span><span style="font-size:16px;font-weight:bold;">7,438</span> 总访问量</span>
                    <span style="margin:0px 12px;color:#f1f3f5;">|</span>
                    <span><span style="font-size:16px;font-weight:bold;">23</span> 文章</span>
                    <span style="margin:0px 12px;color:#f1f3f5;">|</span>
                    <span><span style="font-size:16px;font-weight:bold;">6,523</span> 获赞</span>
                    <span style="margin:0px 12px;color:#f1f3f5;">|</span>
                    <span><span style="font-size:16px;font-weight:bold;">843</span> 排名</span>
                    <span style="margin:0px 12px;color:#f1f3f5;">|</span>
                    <span><span style="font-size:16px;font-weight:bold;">73</span> 摸鱼</span>
                </p>
                <p class="user-work">工作：Web前端开发工程师 &nbsp; &nbsp; &nbsp; &nbsp;  IP属地：山东省

                    &nbsp; &nbsp; &nbsp; &nbsp;  加入时间：2022-10-22
                </p>
                <p class="user-desc">
                    个人简介：ctrl + c , ctrl + v的好，下班下得早
                    <!-- <el-button type="primary" size="small" ></el-button> -->
                     <el-button type="primary" plain round size="small" style="float:right;">编辑个人资料</el-button>
                    
                </p>
                
            </div>
        </div>
        <div class="data-container">
            <div class="menu"></div>
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
</template>
<script>

export default {
    name:"UserCenter",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.container{
    width:1024px;
    margin:0px auto;
}
.container .user-card{
    width:1024px;
    height:180px;
    background:#fff;
    margin-top:30px;
}
.container .user-card .user-image{
    width:90px;
    height:90px;
    float:left;
    border-radius: 50%;
    background:orange;
    position:relative;
    top:-10px;
    margin-left:20px;
}
.container .user-card .user-image img{
    width:90px;
    height:90px;
}
.container .user-card .user-info{
    width:875px;
    margin-left:20px;
    float:left;
    padding:10px 0px;

}
.container .user-card .user-info .user-name{
    font-size:22px;
    color:#666;
    margin:0px;
    font-weight:bold;
}

.container .user-card .user-info .user-work{
    font-size:14px;
    color:#777;
    margin:12px 0px;
}

.container .user-card .user-info .user-desc{
    font-size:14px;
    color:#777;
}
 .data-container{
    width:1024px;
    margin-top:20px;
 }
 .data-list{
    width:984px;
    padding:20px;
    background:#fff;
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