<template>
    <div>
      <!-- 文章列表 -->
      <div class="box" v-for="(item,index) in articleList" :key="index" >
          <div class="article-time">
            <!-- <span class="article-cate" style="font-size:8px!important;float:left;">{{item.cate}}</span> -->

              <div class="author-photo">
                  <img :src="item.photo" alt="" width="20px;">
              </div>
              <span style="font-size:13px;">XuJingLiang</span>
            <span style="margin:0px 8px;">|</span>
            <span style="font-size:13px;">发布于7天前</span>
            <span style="margin:0px 8px;">|</span>
            <span style="ont-size:13px;">{{item.cate}}</span>
            
          </div>
          <div class="article-title">
            <span class="title"  @click="$router.push({path:'/article'})">{{item.title}}</span>
          </div>
          <div>
            <div class="left">
              <p class="article-desc">使用MapBox GL加载GeoJson点(circle)、线(line)、面(fill)、图标(symbol)、3D(fill-exceti)……</p>
              <div class="article-info">
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-liulan.png" width="19px" style="position:relative;top:4px;left:-2px;" alt=""/>&nbsp;123</span>
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-comment.png" width="16px" style="position:relative;top:2px;left:-2px;" alt=""/>&nbsp;448</span>
                <span style="margin-right: 22px;font-size:13px;"><img src="/images/icon/list-good.png" width="17px" style="position:relative;top:2px;left:-2px;" alt=""/>&nbsp;123</span>
                <span style="margin-right: 22px;font-size:13px;">
                  <img src="/images/icon/list-tag.png" width="16px" style="position:relative;top:3px;left:-2px;" alt=""/>
                 Vue&nbsp;<span style="font-weight:bold;">·</span>&nbsp;Mapboxgl
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
          title:"【MapBoxGL】加载GeoJSON点线面数据",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b95a35a980c04f77a3a4d2a14f3a7550~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81eead6c42c6472ab21933a227c9c7f4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54578e4d7ce8408889133730df69a5f7~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f82cb9accd7408183b62caa9bc23b25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【MapBoxGL】（零）MapBoxGL功能总结",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6322db5aed2547a18b9cb7c3f1f3eb61~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【Git】创建Git项目上传代码和拉取远程代码",
          cate:"Cesium",
          photo:"/images/csdn.png",
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69354fd5358d4c27b5e26ca00edb716c~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },    {
          title:"【MapBoxGL】加载GeoJSON点线面数据",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b95a35a980c04f77a3a4d2a14f3a7550~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81eead6c42c6472ab21933a227c9c7f4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54578e4d7ce8408889133730df69a5f7~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f82cb9accd7408183b62caa9bc23b25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【MapBoxGL】（零）MapBoxGL功能总结",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6322db5aed2547a18b9cb7c3f1f3eb61~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【Git】创建Git项目上传代码和拉取远程代码",
          cate:"Cesium",
          photo:"/images/csdn.png",
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69354fd5358d4c27b5e26ca00edb716c~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81eead6c42c6472ab21933a227c9c7f4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f82cb9accd7408183b62caa9bc23b25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
        },{
          title:"【MapBoxGL】（零）MapBoxGL功能总结",
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
.box{
 width:700px;
 padding:20px;
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
  width:580px;
  float:left;
  
}

.box .right{
  width:120px;
  height:80px;
  margin-top:0px;
  float:left;
  border-radius: 2px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.05);
  overflow: hidden;
}
.box .right img{
  width:120px;
  height:80px;
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
  width:100%;
  height:30px;
  color:#333;
  line-height:30px;
  font-weight: bold;
  font-size:16px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.box .article-title .title:hover{
  color:#409eff;
  /* text-decoration:underline; */
}
.box .article-desc{
  width:100%;
  height:40px;
  margin:4px 0px;
  font-size:13px;
  color:#999;
  line-height:40px;
  
}
.box .article-count{
  width:100%;
  height:30px;
  line-height:30px;
  color:#999;
}

.box:hover{
  background:#fafafa;
  cursor:pointer;
}

.box .article-info{
  height:30px;
  width:100%;
  font-size:14px;
  color:#777;
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
  color:#999;
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