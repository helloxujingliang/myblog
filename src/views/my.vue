<template>
    <div class="my-container">
        <div class="user-info">
            <div class="user-container">
                <div class="user-info">
                    <div class="photo">
                        <img src="@/assets/images/head-photo.jpg" width="50px" alt="">
                    </div>
                    <div class="username">
                        <p>XuJingLiang</p>
                        <p style="font-size:12px;color:#999;">Web前端开发工程师</p>
                    </div>
                </div>
                <div class="user-count">
                <div class="row">
                    <div class="count-btn">
                    <i class="el-icon-tickets"></i>
                    </div>
                    <div class="float:left">发表文章数量 32</div>
                </div>
                <div class="row">
                    <div class="count-btn">
                    <i class="el-icon-thumb"></i>
                    </div>
                    <div class="float:left">获得点赞数量 823</div>
                </div>
                <div class="row">
                    <div class="count-btn">
                    <i class="el-icon-view"></i>
                    </div>
                    <div class="float:left">文章浏览次数 12,102</div>
                </div>
                </div>
            </div>
             <div class="article-list">
                <div class="filter">
                    <el-input size="mini" style="width:220px;height:20px;margin-right:2px;position:relative;top:0px;text-align:left;" placeholder="请输入关键词进行搜索"></el-input>
                    <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
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
  width:1026px;
  padding:12px;
  min-height:80px;
  background:#fff;
  margin-bottom:20px;
}
.user-info{
  width:266px;
  height:70px;
  float:left;

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
    float:left;
  font-size:13px;
  padding-top:12px;
}
.user-count .row{
  float:left;
  height:50px;
  width:180px;
  margin-top:6px;
  line-height: 30px;
}
.count-btn{
  float:left;
  width:30px;
  height:30px;
  border-radius:50%;
  background:rgba(123,185,255,0.3);
  text-align:center;
  line-height:30px;
  color:#409eff;
  font-size:18px;
  margin-right:12px;
  margin-left:6px;
}
.user-container .username p{
  margin:10px;
}

.article-list{
    width:1050px;
    background:#fff;
    margin-top:12px auto;
}
.filter{
    width:1050px;
    height:46px;
    border-bottom:1px solid #f1f3f5;
}

.box{
 width:1020px;
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
</style>