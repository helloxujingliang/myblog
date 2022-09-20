<template>
    <div class="my-container">
        <div class="user-container">
            <div style="width:250px;background:#fff;padding:12px;height:140px;">
              <div class="user-info">
                <div class="photo">
                    <img src="@/assets/images/head-photo.jpg" width="50px" alt="">
                </div>
                <div class="username">
                    <p><span style="float:right;"><el-link type="primary" :underline="false">编辑</el-link></span></p>
                    <p>XuJingLiang</p>
                    <p style="font-size:12px;color:#999;">Web前端开发工程师</p>
                </div>
              </div>
              <div class="user-count">
              <div class="row">
                  <div class="count-btn">32</div>
                  <div>发表文章</div>
              </div>
              <div class="row">
                  <div class="count-btn">32</div>
                  <div>文章点赞</div>
              </div>
              <div class="row">
                  <div class="count-btn">32</div>
                  <div>文章浏览</div>
              </div>
              </div>
            </div>
            <div class="menu-box">
              <div class="menu"><i class="el-icon-tickets"></i>&nbsp;我的文章</div>
              <div class="menu"><i class="el-icon-thumb"></i>&nbsp;我的点赞</div>
              <div class="menu"><i class="el-icon-star-off"></i>&nbsp;我的收藏</div>
              <div class="menu"><i class="el-icon-thumb"></i>&nbsp;我的评论</div>
              <div class="menu"><i class="el-icon-tickets"></i>&nbsp;作品数据</div>
              <div class="menu"><i class="el-icon-tickets"></i>&nbsp;我的关注</div>
              <div class="menu"><i class="el-icon-tickets"></i>&nbsp;我的粉丝</div>
              <div class="menu"><i class="el-icon-lock"></i>&nbsp;账号安全</div>
            </div>
        </div>
        <div class="article-list">
            <div class="filter">
                <!-- <el-input size="mini" style="width:220px;height:20px;margin-right:2px;position:relative;top:0px;text-align:left;" placeholder="请输入关键词进行搜索"></el-input>
                <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button> -->
            </div>
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
                <!-- 分页 -->
            <div class="pagenation">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"My",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.my-container{
    width:1050px;
    margin:0px auto;
}

.user-container{
  width:250px;
  float:left;
  min-height:80px;
  margin-bottom:20px;
  height:100px;
}
.user-info{
  width:250px;
  height:70px;
  background:#fff;
}
.user-container .photo{
  width:50px;
  height:50px;
  background:#f1f1f1;
  border-radius: 50%;
  margin:8px auto;
  float:left;
  border:1px solid #ccc;
  overflow:hidden;
}
.user-container .username{
  width:160px;
  height:50px;
  margin-left:10px;
  font-size:14px;
  color:#333;
  text-align: left;
  float:left;
}
.user-count{
  width:250px;
  background:#fff;
  font-size:13px;
  padding-top:12px;
}
.user-count .row{
  height:50px;
  width:83px;
  margin-top:6px;
  line-height: 30px;
  float:left;
  text-align: center;
}
.count-btn{
  height:30px;
  text-align:center;
  line-height:30px;
  color:#777;
  font-size:14px;
  margin-right:12px;
  margin-left:6px;
}
.user-container .username p{
  margin:10px;
}

.article-list{
    width:760px;
    float:right;
    background:#fff;
    margin-top:12px auto;
}
.filter{
    width:760px;
    height:46px;
    border-bottom:1px solid #f1f3f5;
}

.box{
 width:730px;
 height:100px;
 padding:15px;
 background:#fff;
 border-bottom:1px solid #f1f1f1;
 transition: all 0.3s;
 
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
.pagenation{
  width:720px;
  height:50px;
  margin-top:12px;
}
.menu-box{
  width:250px;
  padding:12px;
  background:#fff;
  border-top:1px solid #f1f3f5;
}
.menu{
  width:240px;
  height:45px;
  font-size:14px;
  line-height:45px;
  text-indent:8px;;
}
</style>