<template>
  <div class="body-container">
    <div class="article-list-container">
      <router-view/>

    </div>

    <div class="record-list-container">
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
          <i class="el-icon-link"></i> 创作者排行
        </div>
        <div class="record-list">
          <div style="width:266px;height:40px;line-height:30px;" v-for="(item,index) in 5" :key="index">
              <div style="float:left;width:30px;height:40px;color:orange;"><i>{{index+1}}、</i></div>
              <div class="author-photo" style="float:left;">
                  <img src="@/assets/images/head-photo.jpg" alt="" width="30px;">
              </div>
              <div style="float:left;width:180px;">
                <span style="color:#333;margin-left:16px;font-size:12px;font-weight:400;">XuJingLiang</span>
                <span style="color:#333;font-size:12px;font-weight:400;float:right;color:orange;">10{{index}}篇</span>
              </div>
          </div>
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
      <Footer></Footer>
    </div>
   
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
export default {
  name:"Index",
  components:{
    Footer
  },
  data(){
    return {
      tags:['Vue 2','MapBox GL','Vue 3','GeoServer','Git','Vue Router','Axios','Element UI','Leaflet',],
      link:["Vue2","Element UI","MapBox GL","GitHub","阿里巴巴矢量图标库","npm","Vue Router","Axios","Vue3","CSDN","Cesium","Element UI","MapBox GL","GitHub","阿里巴巴矢量图标库","npm","Vue Router","Axios","Vue3","CSDN","Cesium"],
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
  border-radius: 5px;
  float:left;
  background:#fff;

}
.record-list-container{
  width:290px;
  float:right;
  height:800px;
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
  font-size:13px;
  padding-top:12px;
}
.user-count .row{
  height:34px;
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
  border-radius: 5px;
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

.author-photo{
  width:28px;
  height:28px;
  border:1px solid #bbb;
  border-radius:50%;
  float:left;
  margin-right:6px;
  overflow: hidden;
}
</style>>

