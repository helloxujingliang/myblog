<template>
<div class="study-page">
    <div class="silder-container">
        <div class="cate">
            <ul>
                <li>
                    <p>
                        <span class="parent-cate-name">前端开发</span>
                    </p>
                    <p>
                        <span class="child-cate-name">JavaScript</span>
                        <span class="child-cate-name">Vue</span>
                        <span class="child-cate-name">HTML5</span>
                        <span class="child-cate-name">CSS3</span>
                        <span class="child-cate-name">MapboxGL</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span class="parent-cate-name">后端开发</span>
                    </p>
                    <p>
                        <span class="child-cate-name">Java SE</span>
                        <span class="child-cate-name">SpringBoot</span>
                        <span class="child-cate-name">MyBatis</span>
                        <span class="child-cate-name">Servlet</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span class="parent-cate-name">数据库</span>
                    </p>
                    <p>
                        <span class="child-cate-name">MySQL</span>
                        <span class="child-cate-name">Redis</span>
                        <span class="child-cate-name">MongoDB</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span class="parent-cate-name">服务部署</span>
                    </p>
                    <p>
                        <span class="child-cate-name">Linux</span>
                        <span class="child-cate-name">Tomcat</span>
                        <span class="child-cate-name">Nginx</span>
                        <span class="child-cate-name">IIS</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span class="parent-cate-name">开发工具</span>
                    </p>
                    <p>
                        <span class="child-cate-name">Git</span>
                        <span class="child-cate-name">SVN</span>
                        <span class="child-cate-name">Visiual Studio Code</span>
                        <span class="child-cate-name">IIS</span>
                    </p>
                </li>


            </ul>
        </div>
        <div class="silder">
            <el-carousel :interval="4000" type="" height="360px">
                <el-carousel-item v-for="(item,index) in silderList" :key="index">
                    <img :src="item.image" width="100%"/>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="study-container">
        <div class="page-title">
            最新课程
        </div>
        <!-- <div class="filter-container">
            <div class="cate-container">
                <div class="cate-title">课程方向：</div>
                <div class="cates" style="float:left;">
                    <span>前端开发</span>
                    <span>后端开发</span>
                    <span>服务部署</span>
                    <span>开发工具</span>
                    <span>地理信息</span>
                </div>
            </div>

            <div class="cate-container">
                <div class="cate-title">技术分类：</div>
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
        </div> -->
        <div class="course-container">
            <div class="course-box" v-for="(item,index) in cursorList" :key="index">
                <div class="image">
                    <img :src="item.image" width="211px" /> 
                </div>
                <div class="course-info">
                    <p style="font-size:14px;padding-top:8px;">
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

         <div class="page-title">
            热门课程
        </div>
         <div class="course-container">
            <div class="course-box" v-for="(item,index) in cursorList" :key="index">
                <div class="image">
                    <img :src="item.image" width="211px" /> 
                </div>
                <div class="course-info">
                    <p style="font-size:14px;padding-top:8px;">
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
      <!-- <div class="pagenation">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div> -->

    </div>
</div>
   
</template>
<script>
export default {
    name:"Study",
    data(){
        return {
            silderList:[
                {
                    image:"/images/silder-1.png",
                    url:"",
                },{
                    image:"/images/silder-3.png",
                    url:"",
                },{
                    image:"/images/silder-4.png",
                    url:"",
                },{
                    image:"/images/silder-2.png",
                    url:"",
                }
            ],
            cursorList:[
                {
                    title:"HTML开发个人博客系统",
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5291e72867fd4225a432e8b50b9d3931~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3855caad5c40dd967c3f01be794f9d~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dabeafad6df48ea9af0efde68d15687~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7378a70da0b484ba28c5b760256b573~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e862dc7c91c402595a6605b8b711efc~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1eea56b4afb04349ac752916ecd28cf5~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73d23deb51044502ad1f5441ddf274b4~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bc3674409ff443eb93a1629f33c1e06~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc576c1d817e4ac18ee57b7ec1437e0c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                },{
                    title:"HTML开发个人博客系统",
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec48adc1f419454fbe9407e29483d797~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    count:parseInt(Math.random()*100000)
                }
            ]
        }
    }
}
</script>
<style scoped>
.study-page{
   width:100%;
   margin-top:15px;
}
.silder-container{
    width:1024px;
    margin:0px auto;
    height:360px;
    /* background:rgba(0,0,0,0.7); */
    margin-bottom:15px;
}
.silder-container .cate{
    width:285px;
    height:360px;
    background:#fff;
    float:left;

}
.silder-container .cate ul{
    width:285px;
    list-style: none;
    margin:0px;
    text-indent: 0px;
    padding:0px;
}
.silder-container .cate ul li{
    width:285px;
    height:48px;
    padding:12px 0px;
}
.silder-container .cate ul li p{
    margin:0px;
    line-height:20px;
    text-indent: 12px;
}
.parent-cate-name{
    font-size:14px;
    color:#333;
    font-weight:500;
}
.child-cate-name{
    font-size:13px;
    color:#777;
    margin-right:6px;
    position:relative;
    top:5px;
}


.silder{
    width:724px;
    height:360px;
    float:right;
}
.study-container{
    /* width:1140px; */
    width:1024px;
    margin:0px auto;
    /* background:#fff; */
    
}
.page-title{
    width:1140px;
    height:60px;
    line-height:60px;
    font-weight: bold;
}
.filter-container{
    width:1090px;    
    padding:25px 0px;
     /* background:#fff; */
}
.filter-container p{
    margin:0px;
    font-size:13px;
    line-height:24px;
}

.cate-container{
    width:1140px;
    min-height:40px;
    font-size:13px;
     /* background:#fff; */
}

.cate-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.cate-title{
    width:70px;
    float:left;
    line-height:30px;
    font-size:14px;
    color:#777;

}
.cates{
    width:1000px;
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
  font-size:13px;
  color:#777;
  margin:4px 6px;
}
.cates span:hover{
  color:#409eff;
  cursor:pointer;
}

.artilce-filter{
  line-height:40px;
  width:1140px;
  height:40px;
  margin-top:12px;
  border-bottom:1px solid #f1f3f5;
}
.filter-menu{
  height:38px;
  margin-right:16px;
  float:left;
  border-bottom:2px solid #f1f3f5;
}
.filter-menu:hover{
  /* border-color:#409eff; */
}

.course-container{
    width:1024px;
}

.course-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}

.course-box{
    width:241px;
    height:240px;
    margin-right:20px;
    float:left;
    background:#fff;
    border-radius:2px;
    overflow: hidden;
    margin-bottom:15px;
}
.course-box:nth-child(4n){
    margin-right:0px;
}
.course-box img{
    width:241px;
}

.image{
    width:241px;
    height:141px;
}
.course-info{
    width:220px;
    height:60px;
    padding:0px 10px;
}

.course-info p{
    margin:5px 0px;
}

.pagenation{
    width:1140px;
    text-align: center;
    padding:24px 0px;
}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 360px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>