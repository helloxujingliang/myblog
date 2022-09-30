<template>
    <div class="study-container">
        <div class="filter-container">
            <div class="cate-container">
                <div class="cate-title">方 向：</div>
                <div class="cates" style="float:left;">
                   
                    <span>前端开发</span>
                    <span>后端开发</span>
                    <span>服务部署</span>
                    <span>开发工具</span>
                    <span>地理信息</span>
                </div>
            </div>

            <div class="cate-container">
                <div class="cate-title">分 类：</div>
                <div class="cates" style="float:left;">
                     <span>全部课程</span>
                    <span>JavaScript</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Vue 2</span>
                    <span>Vue 3</span>
                    <span>LayUI</span>
                    <span>Element UI</span>
                    <span>MapBoxGL</span>
                    <span>Cesium</span>
                    <span>ECharts</span>
                    <span>Leaflet</span>
                    <span>BootStrap</span>
                    <span>jQuery</span>
                    <span>React</span>
                    <span>Angular</span>
                </div>
            </div>

            <div class="artilce-filter">
                <div class="filter-menu">
                    <el-link type="primary" style="font-size:12px;" :underline="false">全部课程</el-link>
                </div>
                <div class="filter-menu" >
                    <el-link type="default" style="font-size:12px;" :underline="false">最新发布</el-link>
                </div>
                <div class="filter-menu">
                    <el-link type="default" style="font-size:12px;" :underline="false">最多学习</el-link>
                </div>
            </div>
        </div>
        <div class="course-container">
            <div class="course-box" v-for="(item,index) in cursorList" :key="index">
                <div class="image">
                    <img :src="item.image" width="200px" /> 
                </div>
                <div class="course-info">
                    <p style="font-size:14px;">
                        尚硅谷 JavaScript快速入门 108节
                    </p>
                    <p>
                        <span style="font-size:12px;color:#999;float:left;">{{item.count}}次学习</span>
                        <span style="font-size:12px;color:#999;float:right;margin-right:8px;">
                            <i class="el-icon-star-off"></i>
                            收藏</span>
                    </p>
                </div>
            </div>
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
</template>
<script>
export default {
    name:"Study",
    data(){
        return {
            cursorList:[
                {
                    title:"HTML开发个人博客系统",
                    image:"/images/html.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/html-1.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/html-2.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/study-1.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/jquery.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/php.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/css.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/css3.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/react.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/js-1.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/html5.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/html.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/angular.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/html.png",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"/images/html.png",
                    count:parseInt(Math.random()*100000)
                },
            ]
        }
    }
}
</script>
<style scoped>
.study-container{
    width:1050px;
    margin:0px auto;
    background:#fff;
    
}
.filter-container{
    width:1000px;    
    padding:25px 25px 0px 25px;
     background:#fff;
}
.filter-container p{
    margin:0px;
    font-size:13px;
    line-height:24px;
}

.cate-container{
    width:1000px;
    min-height:40px;
    font-size:13px;
     background:#fff;
}

.cate-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.cate-title{
    width:50px;
    float:left;
    line-height:30px;

}
.cates{
    width:940px;
    float:left;

}

.cates::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}

.cates span{
  display: block;
  float:left;
  padding:4px 8px;
  margin-right:12px;
  background:#f9f9f9;
  border-radius:6px;
  font-size:12px;
  color:#777;
  margin:4px 6px;
}
.cates span:hover{
  color:#409eff;
  cursor:pointer;
}

.artilce-filter{
  line-height:40px;
  width:1050;
  height:40px;
  background:#fff;
  margin-top:12px;
  border-bottom:1px solid #f1f3f5;
}
.filter-menu{
  height:38px;
  margin-right:16px;
  float:left;
  border-bottom:2px solid #fff;
}
.filter-menu:hover{
  /* border-color:#409eff; */
}

.course-container{
    width:1024px;
    padding:12px;
     background:#fff;
}

.course-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}

.course-box{
    width:192.5px;
    height:200px;
    float:left;
    margin:6px;
    background:#f6f6f6;
    border-radius:4px;
    overflow: hidden;
}

.image{
    width:200px;
    height:115px;
}
.course-info{
    width:180px;
    height:80px;
    padding:0px 10px;
}

.course-info p{
    margin:5px 0px;
}

.pagenation{
    width:1050px;
    text-align: center;
    padding:24px 0px;
}
</style>