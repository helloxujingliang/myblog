<template>
    <div>
      <!-- 文章列表 -->
      <div class="box" v-for="(item,index) in articleList" :key="index" >
          <div class="article-time">
            <!-- <span class="article-cate" style="font-size:8px!important;float:left;">{{item.cate}}</span> -->

              <div class="author-photo">
                  <img :src="item.photo" alt="" width="20px;">
              </div>
              <span style="font-size:13px;"  class="hoverActive">孤独的面包</span>
            <span style="margin:0px 8px;color:#e5e6eb;">|</span>
            <span style="font-size:13px;">发布于{{parseInt(32*Math.random())}}天前</span>
            <span style="margin:0px 8px;color:#e5e6eb;">|</span>
            <span style="ont-size:13px;" class="hoverActive">{{item.cate}}</span>
            
          </div>
       
          <div>
            <div class="left">
              <div class="article-title">
                <span class="title"  @click="$router.push({path:'/article'})">{{item.title}}</span>
              </div>
              <p class="article-desc">{{item.desc}}</p>
              <div class="article-info">
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-liulan.png" width="19px" style="position:relative;top:4px;left:-2px;" alt=""/>&nbsp;123</span>
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-comment.png" width="16px" style="position:relative;top:2px;left:-2px;" alt=""/>&nbsp;448</span>
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-good.png" width="17px" style="position:relative;top:2px;left:-2px;" alt=""/>&nbsp;123</span>
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-collect.png" width="17px" style="position:relative;top:2px;left:-2px;" alt=""/>&nbsp;53</span>
                
                <span style="margin-right: 22px;font-size:13px;">
                  <img src="/images/icon/list-tag.png" width="16px" style="position:relative;top:3px;left:-2px;" alt=""/>
                  <span class="hoverActive">Vue</span> <span style="font-weight:550;">·</span> <span class="hoverActive">Mapboxgl&nbsp;</span>
                </span>
              </div>
            
            </div>
            <div class="right">
              <img :src="item.image" alt="" >
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
  name:"List",
  data(){
    return {
      articleList:[
        {
          title:"MapBoxGL加载GeoJSON点线面数据",
          desc:"Linux是一种免费使用和自由传播的类UNIX操作系统，其内核由林纳斯·本纳第克特·托瓦兹于1991年10月5日首次发布，它主要受到Minix和Unix思想的启发，是一个基于POSIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的Unix工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux有上百种不同的发行版，如基于社区开发的debian、archlinux，和基于商业开发的Red Hat Enterprise Linux、SUSE、Oracle Linux等。",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b95a35a980c04f77a3a4d2a14f3a7550~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"MyBatisResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          desc:"Nginx是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点开发的，公开版本1.19.6发布于2020年12月15日。",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81eead6c42c6472ab21933a227c9c7f4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          desc:"Redis（Remote Dictionary Server )，即远程字典服务，是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54578e4d7ce8408889133730df69a5f7~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          desc:"SVN是subversion的缩写，是一个开放源代码的版本控制系统，通过采用分支管理系统的高效管理，简而言之就是用于多个人共同开发同一个项目，实现共享资源，实现最终集中式的管理。",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f82cb9accd7408183b62caa9bc23b25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"MapBoxGL（零）MapBoxGL功能总结",
          desc:"MapBox GL是MapBox提供的JavaScript SDK，可用于各种前端地理信息数据可视化的开发。MapBox GL渲染性能拔群，特别是能渲染大量的数据，这使它能够在众多同类开发框架中脱颖而出；可在支持WebGL的移动端浏览器上运行；地图浏览平滑流畅，可视化效果丰富；使用方便，良好的可扩展性、拥有众多的插件使之可以满足开发者的各种需求。",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6322db5aed2547a18b9cb7c3f1f3eb61~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"Git创建Git项目上传代码和拉取远程代码",
          desc:"Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。通过这种方式，Spring Boot致力于在蓬勃发展的快速应用开发领域(rapid application development)成为领导者。",
          cate:"Cesium",
          photo:"/images/csdn.png",
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69354fd5358d4c27b5e26ca00edb716c~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },    {
          title:"MapBoxGL加载GeoJSON点线面数据",
          desc:"Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b95a35a980c04f77a3a4d2a14f3a7550~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"MyBatisResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          desc:"HTML5是构建Web内容的一种语言描述方式。HTML5是互联网的下一代标准，是构建以及呈现互联网内容的一种语言方式．被认为是互联网的核心技术之一。HTML产生于1990年，1997年HTML4成为互联网标准，并广泛应用于互联网应用的开发。",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81eead6c42c6472ab21933a227c9c7f4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          desc:"互联网信息服务（英语：Internet Information Services,简称IIS），是由微软公司提供的基于运行Microsoft Windows的互联网基本服务。最初是WindowsNT版本的可选包，随后自带在Windows2000、Windows XP Professional和Windows Server 2003一起发布，但在普遍使用的Windows XP Home版本上并没有IIS。",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54578e4d7ce8408889133730df69a5f7~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          desc:"Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。也是Linus Torvalds为了帮助管理Linux内核开发而开发的一个开放源码的版本控制软件。",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f82cb9accd7408183b62caa9bc23b25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"MapBoxGL（零）MapBoxGL功能总结",
          desc:"ECharts是一款基于JavaScript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。ECharts最初由百度团队开源，并于2018年初捐赠给Apache基金会，成为ASF孵化级项目。",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6322db5aed2547a18b9cb7c3f1f3eb61~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"Git创建Git项目上传代码和拉取远程代码",
          desc:"GeoServer 是 OpenGIS Web 服务器规范的 J2EE 实现，利用 GeoServer 可以方便的发布地图数据，允许用户对特征数据进行更新、删除、插入操作，通过 GeoServer 可以比较容易的在用户之间迅速共享空间地理信息。GeoServer是社区开源项目，可以直接通过社区网站下载，详细请查看本文档末的资源表。",
          cate:"Cesium",
          photo:"/images/csdn.png",
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69354fd5358d4c27b5e26ca00edb716c~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"MyBatisResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          desc:"MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81eead6c42c6472ab21933a227c9c7f4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          desc:"微信小程序，小程序的一种，英文名Wechat Mini Program，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f82cb9accd7408183b62caa9bc23b25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"MapBoxGL（零）MapBoxGL功能总结",
          desc:"ArcGIS产品线为用户提供一个可伸缩的，全面的GIS平台。ArcObjects包含了许多的可编程组件，从细粒度的对象（例如单个的几何对象）到粗粒度的对象（例如与现有ArcMap文档交互的地图对象）涉及面极广，这些对象为开发者集成了全面的GIS功能。",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6322db5aed2547a18b9cb7c3f1f3eb61~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },
      ]
    }
  }
}
</script>
<style scoped>
.hoverActive:hover{
  color:#1e80ff;
  cursor:pointer;
}
.box{
 width:700px;
 padding:20px 20px;
 padding-bottom:15px;
 background:#fff;
 border-bottom:1px solid #f1f1f1;
 transition: all 0.3s;
 position:relative;
 font-family: '微软雅黑';
}
.box::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.box .left{
  width:565px;
  float:left;
  
}

.box .right{
  width:120px;
  height:88px;
  margin-top:5px;
  margin-left:15px;
  float:left;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.05);
  overflow: hidden;
}
.box .right img{
  width:120px;
  height:88px;
  transition: all 0.3s;
}
.box .right img:hover{
  transform:scale(1.2);
}
.box p{
  margin:0px;
}
.article-cate{
  padding:2px 3px;
  color:#fff;
  background-image:-webkit-linear-gradient(0deg,#3ca5f6 0,#a86af9 100%);
  border-radius:3px;
  border-bottom-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-right:3px;
  font-weight:200;
  font-size:18px;
}

.box .article-title{
  /* width:100%; */
  width:580px;
  height:30px;
  color:#373737;
  line-height:30px;
  font-weight: 600;
  font-size:15px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.box .article-title .title:hover{
  color:#1e80ff;
  cursor:pointer;
  /* text-decoration:underline; */
}
.box .article-desc{
  width:100%;
  height:30px;
  margin:4px 0px;
  font-size:13px;
  color:#86909c;
  line-height:30px;
  text-overflow: ellipsis;
  overflow:hidden;
  white-space: nowrap;
}
.box .article-count{
  width:100%;
  height:30px;
  line-height:30px;
  color:#999;
}

.box:hover{
  background:#fafafa;
}

.box .article-info{
  height:30px;
  width:100%;
  font-size:14px;
  color:#86909c;
  /* color:#4e5969; */
  line-height:30px;
}
.pagenation{
  width:720px;
  height:50px;
  margin-top:12px;
  text-align: center;
}
.article-time{
  width:100%;
  height:30px;
  font-size:13px;
  color:#86909c;
  line-height:20px;
}
.author-photo{
  width:20px;
  height:20px;
  border-radius:50%;
  float:left;
  margin-right:6px;
  overflow: hidden;
  position:relative;
}


</style>