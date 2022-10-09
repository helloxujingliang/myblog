<template>
    <div>
      <!-- 文章列表 -->
      <div class="box" v-for="(item,index) in articleList" :key="index" >
          
          <div class="article-title">
            <span class="article-cate" style="font-size:8px!important;">{{item.cate}}</span>
            <span class="title"  @click="$router.push({path:'/article'})">{{item.title}}</span>
          </div>
          <div>
            <div class="left">
              <p class="article-desc">使用MapBox GL加载GeoJson点(circle)、线(line)、面(fill)、图标(symbol)、3D(fill-exceti)……</p>
              <div class="article-info">
                <div style="float:left;">
                  <div class="author-photo">
                      <img :src="item.photo" alt="" width="30px;">
                  </div>
                  <span style="color:#333;margin-right:12px;font-size:13px;font-weight:400;">XuJingLiang</span>
                </div>
                <span style="margin-right: 22px;font-size:13px;"><i class="el-icon-time"></i>&nbsp;2022-009-10 12:33&nbsp;</span>
                <span style="margin-right: 22px;font-size:13px;"><i class="el-icon-view"></i>&nbsp;448&nbsp;</span>
                <span style="margin-right: 22px;font-size:13px;"><i class="el-icon-thumb"></i>&nbsp;123&nbsp;</span>
                <span style="font-size:12px;float:right;margin-left:24px;">
                  <el-link style="font-size:13px;margin-right:6px;" type="default" :underline="false"> #Vue2</el-link>
                  <el-link style="font-size:13px;margin-right:6px;"  type="default" :underline="false"> #MapBox GL </el-link>
                </span>
              </div>
            </div>
            <div class="right">
              <img :src="item.image" alt="">
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
          image:"/images/springboot.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"/images/java.png",
        },{
          title:"【MapBoxGL】（零）MapBoxGL功能总结",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"/images/mysql.png",
        },{
          title:"【Git】创建Git项目上传代码和拉取远程代码",
          cate:"Cesium",
          photo:"/images/csdn.png",
          image:"/images/mybatisplus.png",
        },        {
          title:"【MapBoxGL】加载GeoJSON点线面数据",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"/images/springboot.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"/images/java.png",
        },{
          title:"【MapBoxGL】（零）MapBoxGL功能总结",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"/images/mysql.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        }
        // ,{
        //   title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
        //   cate:"MySQL",
        //   photo:"/images/weibo.png",
        //   image:"/images/java.png",
        // },{
        //   title:"【MapBoxGL】（零）MapBoxGL功能总结",
        //   cate:"Java SE",
        //   photo:"/images/baidu.png",
        //   image:"/images/mysql.png",
        // },
      ]
    }
  }
}
</script>
<style scoped>
.box{
 width:810px;
 height:120px;
 padding:10px;
 background:#fff;
 border-bottom:1px solid #f1f1f1;
 transition: all 0.3s;
 position:relative;
}
.box .left{
  width:650px;
  height:88px;
  float:left;
  padding-right:10px;
}

.box .right{
  width:140px;
  height:88px;
  margin-top:0px;
  float:left;
  border-radius: 2px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.05);
  overflow: hidden;
}
.box .right img{
  width:140px;
  height:88px;

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
  font-size:14px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.box .article-title .title:hover{
  color:#409eff;
  text-decoration:underline;
}
.box .article-desc{
  width:100%;
  height:40px;
  margin:5px 0px;
  font-size:13px;
  color:#999;
  line-height:40px;
  
}

.box:hover{
  background:#fafafa;
  cursor:pointer;
}

.box .article-info{
  width:630px;
  height:30px;
  font-size:14px;
  color:#777;
  float:left;
  line-height:30px;
}
.pagenation{
  width:720px;
  height:50px;
  margin-top:12px;
  text-align: center;
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

</style>