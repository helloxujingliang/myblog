<template>
  <div class="body-container">
    <div class="article-list-container">
      <div class="box" v-for="(item,index) in 15" :key="index" >
          <p class="article-title">【MapBox GL】加载加载GeoJson图层</p>
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

    <div class="record-list-container">
      <div class="user-container">
        <div class="user-info">
          <div class="photo">
            <img src="@/assets/images/photo.png" width="50px" alt="">
          </div>
          <div class="username">
            <p>FrontCangKu</p>
            <p style="font-size:12px;color:#999;">2022-09-12 12:20</p>
          </div>
        </div>
        <div class="user-count">
          <div class="row">
            <div class="count-btn">
              <i class="el-icon-tickets"></i>
            </div>
            <div class="float:left">文章数量 32</div>
          </div>
          <div class="row">
            <div class="count-btn">
              <i class="el-icon-thumb"></i>
            </div>
            <div class="float:left">获得点赞 823</div>
          </div>
          <div class="row">
            <div class="count-btn">
              <i class="el-icon-view"></i>
            </div>
            <div class="float:left">文章浏览次数 12,102</div>
          </div>
        </div>
      </div>
      <div class="record-container">
        <div class="cate-title">
          <i class="el-icon-s-data"></i> 浏览排行
        </div>
        <div class="record-list">
          <p v-for="(item,index) in 10" style="font-size:13px;height:22px;" :key="index">
            <i style="color:#409eff;">{{index+1}}、</i>
            <el-link style="font-size:12px;">MapBox GL加载GeoJson点线面图标图……</el-link>
          </p>
          
        </div>
      </div>

        <div class="record-container">
        <div class="cate-title">
          <i class="el-icon-link"></i> 常用链接
        </div>
        <div class="record-list">
          <el-link type="primary" v-for="(item,index) in link" :key="index" style="margin:4px 8px;font-size:13px;">{{item}}</el-link>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  name:"Index",
  data(){
    return {
      tags:['Vue 2','MapBox GL','Vue 3','GeoServer','Git','Vue Router','Axios','Element UI','Leaflet',],
      link:["Vue2","Element UI","MapBox GL","GitHub","阿里巴巴矢量图标库","npm","Vue Router","Axios","Vue3","CSDN","Cesium"],
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
.body-container{
  width:1050px;
  margin:0px auto;
}
.body-container::after{
  content:"";
  display:block;
  clear:both;
  height:0;
  visibility: hidden;
}
.article-list-container{
  width:720px;
  padding:10px;

  float:left;
  background:#fff;

}
.record-list-container{
  width:290px;
  float:right;
  height:800px;
}

.box{
 width:690px;
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

.user-container{
  width:266px;
  padding:12px;
  min-height:200px;
  background:#fff;
  margin-bottom:20px;
}
.user-info{
  width:266px;
  height:70px;
  border-bottom:1px solid #f1f3f5;
}
.user-container .photo{
  width:50px;
  height:50px;
  background:#f1f1f1;
  border-radius: 50%;
  margin:8px auto;
  float:left;
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
  font-size:13px;
  padding-top:12px;
}
.user-count .row{
  height:40px;
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
.record-container{
  width:266px;
  padding:12px;
  min-height:200px;
  background:#fff;
  margin-bottom:20px;
  position: relative;
}
.cate-title{
  width:266px;
  position:absolute;
  top:0px;
  left:0px;
  padding:12px;
  font-size:14px;
  border-bottom:1px solid #f1f3f5;
}

.record-list{
  margin-top:40px;
  width:266px;
}

.record-list p{
  width:100%;
  height:30px;

  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

</style>>

