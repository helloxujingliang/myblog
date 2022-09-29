<template>
<div>
  <!-- 页面顶部导航搜索栏 -->
  <Header style="position:fixed;top:0px;left:0px;z-index:999;"></Header>
  <div style="width:100%;height:106px;margin-bottom:15px;"></div>

  <!-- 首页主题内容 -->
  <div class="body-container">
    <router-view/>
  </div>
</div>
</template>
<script>
import Header from '@/components/header.vue'
import BreadNav from '@/components/breadnav.vue';
import Footer from '@/components/footer.vue'
export default {
  name:"Index",
  components:{
    Header,
    BreadNav,
    Footer
  },
  data(){
    return {
      breadNavShow:false,
      tags:['Vue 2','MapBox GL','Vue 3','GeoServer','Git','Vue Router','Axios','Element UI','Leaflet',],
      link:["Vue2","Element UI","MapBox GL","GitHub","阿里巴巴矢量图标库","npm","Vue Router","Axios","Vue3","CSDN","Cesium","Element UI","MapBox GL","GitHub","阿里巴巴矢量图标库","npm","Vue Router","Axios","Vue3","CSDN","Cesium"],
    }
  },
   watch:{
    $route:function(e){
      if(e.meta.name == "index" || e.meta.name == "my" || e.meta.name == "write"){
        this.breadNavShow = false;
      }else{
         this.breadNavShow = true;
      }
    }
  },
  created(){

  },
  mounted(){
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.body-container{
  // width:1050px;
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

