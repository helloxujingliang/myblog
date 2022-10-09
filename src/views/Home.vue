<template>
  <!-- 首页主题内容 -->
  <div class="body-container">
    <div class="cate-container">
      <span style="background:#4093ff;color:#fff;">全部</span>
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
    </div>
    <!-- 首页左侧 -->
    <div class="article-list-container">
      <div class="artilce-filter">
        <div class="filter-menu" style="border-color:#409eef;">
          <el-link type="primary" style="font-size:12px;" :underline="false">推荐文章</el-link>
        </div>
        <div class="filter-menu">
          <el-link type="default" style="font-size:12px;" :underline="false">最新发布</el-link>
        </div>
        <div class="filter-menu">
          <el-link type="default" style="font-size:12px;" :underline="false">热门文章</el-link>
        </div>
        <div class="filter-menu">
          <el-link type="default" style="font-size:12px;" :underline="false">最多点赞</el-link>
        </div>
      </div>
      <List></List>
    </div>
    <!-- 首页右侧 -->
    <div  class="record-list-container" >
      <!-- 账户信息 -->
      <div class="user-container">
        <div class="user-info" @click="$router.push({'path':'/my'})">
          <div class="photo">
            <img src="@/assets/images/head-photo.jpg" width="40px" alt="">
          </div>
          <div class="username">
            <p>JavaCat技术团队
              <img src="@/assets/images/level.png" width="36px">
            </p>
            <p style="font-size:12px;color:#999;">前端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：山东省</p>
          </div>
        </div>
        <div class="user-count">
          <div class="row">
            <div class="count-btn">
                32
            </div>
            <div>文章数量</div>
          </div>
          <div class="row">
            <div class="count-btn">
              843
            </div>
            <div>获赞数量</div>
          </div>
          <div class="row">
            <div class="count-btn">
              3232
            </div>
            <div>浏览次数</div>
          </div>
        </div>
        <div style="margin-top:5px;text-align:center;">
          <el-row>
            <el-col :span="4">
              <img src="/images/github.png" width="20px" />
            </el-col>
            <el-col :span="4">
              <img src="/images/csdn.png" width="20px" />
            </el-col>
            <el-col :span="4">
              <img src="/images/baidu.png" width="20px" />
            </el-col>
            <el-col :span="4">
              <img src="/images/qq.png" width="20px" />
            </el-col>
            <el-col :span="4">
              <img src="/images/weibo.png" width="20px" />
            </el-col>
            <el-col :span="4">
              <img src="/images/gitee.png" width="20px" />
            </el-col>
          </el-row>
        </div>
         
      </div>
      <!-- 浏览排行 -->
      <div class="record-container">
        <div class="cate-title">
          <div class="cate-title-text">
            <i class="el-icon-s-data"></i>浏览排行
          </div>
        </div>
        <div class="record-list">
          <p class="hot-article" v-for="(item,index) in articleList" style="font-size:13px;height:22px;" :key="index">
            <!-- <i style="color:#409eff;">{{index+1}}、</i> -->
            <span>{{item.title}}</span>
          </p>
          
        </div>
      </div>
      <!-- 开发者排行 -->
      <div class="record-container">
        <div class="cate-title">
          <div class="cate-title-text">
            <i class="el-icon-user"></i> 创作者排行
          </div>
        </div>
        <div class="record-list">
          <div class="user-info" @click="$router.push({'path':'/my'})">
            <div class="photo">
              <img src="@/assets/images/head-photo.jpg" width="40px" alt="">
            </div>
            <div class="username">
              <p>JavaCat技术团队
                <img src="@/assets/images/level.png" width="36px">
              </p>
              <p style="font-size:12px;color:#999;">前端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：山东省</p>
            </div>
          </div>

          <div class="user-info" @click="$router.push({'path':'/my'})">
            <div class="photo">
              <img src="/images/baidu.png" width="40px" alt="">
            </div>
            <div class="username">
              <p>摆烂工程师
                <img src="@/assets/images/level.png" width="36px">
              </p>
              <p style="font-size:12px;color:#999;">后端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：北京市</p>
            </div>
          </div>

          <div class="user-info" @click="$router.push({'path':'/my'})">
            <div class="photo">
              <img src="@/assets/images/qq.png" width="40px" alt="">
            </div>
            <div class="username">
              <p>百年孤独Html
                <img src="@/assets/images/level.png" width="36px">
              </p>
              <p style="font-size:12px;color:#999;">前端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：山东省</p>
            </div>
          </div>

           <div class="user-info" @click="$router.push({'path':'/my'})">
            <div class="photo">
              <img src="@/assets/images/weibo.png" width="40px" alt="">
            </div>
            <div class="username">
              <p>前端叭叭说
                <img src="@/assets/images/level.png" width="36px">
              </p>
              <p style="font-size:12px;color:#999;">前端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：北京市</p>
            </div>
          </div>

           <div class="user-info" @click="$router.push({'path':'/my'})">
            <div class="photo">
              <img src="@/assets/images/csdn.png" width="40px" alt="">
            </div>
            <div class="username">
              <p>MASA技术团队
                <img src="@/assets/images/level.png" width="36px">
              </p>
              <p style="font-size:12px;color:#999;">后端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：北京市</p>
            </div>
          </div>
        </div>
      </div>
       <!-- 标签 -->
      <div class="record-container">
        <div class="cate-title">
         <div class="cate-title-text">
            <i class="el-icon-price-tag"></i>文章标签
          </div>
        </div>
        <div class="record-list">
          <el-tag type="info" size="mini"  v-for="(item,index) in links" :key="index" style="margin:4px 8px;font-size:13px;">{{item.name}}</el-tag>
        </div>
      </div>
      <!-- 常用链接 -->
      <div class="record-container">
        <div class="cate-title">
          <div class="cate-title-text">
            <i class="el-icon-link"></i>常用链接
          </div>
        </div>
        <div class="record-list">
          <el-link type="default" v-for="(item,index) in links" :key="index" style="margin:4px 8px;font-size:13px;">{{item.name}}</el-link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import List from './list.vue'
export default {
  name:"Index",
  components:{
    List,
    Footer
  },
  data(){
    return {
      breadNavShow:false,
      tags:['Vue 2','MapBox GL','Vue 3','GeoServer','Git','Vue Router','Axios','Element UI','Leaflet',],
      links:[],
      scrollHeight:0,
      isShowLeft:true,
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
        }
      ]
    }
  },
  created(){
    this.getLink();
  },
  mounted(){
    window.addEventListener("scroll",this.handlerScroll);
  },
  methods:{
    handlerScroll(){
      this.scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
      if(this.scrollHeight>1203){
        this.isShowLeft = false;
      }else{
        this.isShowLeft = true;
      }
    },
    getLink(){
      this.$axios({
        url:"http://localhost:8081/linklist",
        method:"get",

      }).then(res=>{
        this.links = res.data;
      }).catch(error=>{

      })
    },
  }
}
</script>
<style lang="scss" scoped>
.body-container{
  width:1140px;
  margin:0px auto;
  padding-bottom:30px;
}
.body-container::after{
  content:"";
  display:block;
  clear:both;
  height:0;
  visibility: hidden;
}
.cate-container{
  width:1140px;
  padding-bottom:10px;
}
.cate-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}

.cate-container span{
  display: block;
  float:left;
  padding:5px 10px;
  margin-right:12px;
  background:#fff;
  border-radius:12px;
  font-size:12px;
  color:#777;
  margin:4px 6px;
}
.cate-container span:hover{
  color:#409eff;
  cursor:pointer;
}
.article-list-container{
  width:830px;
  padding:0px;
  border-radius: 0px;
  float:left;
  background:#fff;

}
.record-list-container{
  width:290px;
  float:right;
  height:800px;
}

.record-list-container-active{
  width:290px;
  height:800px;
  position: fixed;
  top: 75px;
  // margin-left:50%;
  left:50%;
  margin-left:235px;
  // transform: translate(-50%, -50%);
}



.user-container{
  width:266px;
  padding:12px;
  height:160px;
  background:#fff;
  margin-bottom:20px;
    border-radius:0px;
}
.user-info{
  width:266px;
  height:60px;
  border-bottom:1px solid #f1f3f5;
}
.user-info:hover{
  cursor:pointer;
}
.user-container .photo{
  width:40px;
  height:40px;
  background:#f1f1f1;
  border-radius: 50%;
  margin:5px auto;
  float:left;
  overflow:hidden;
  box-shadow: 0 0 4px rgba(0,0,0, 0.1);
}
.user-container .username{
  width:200px;
  height:40px;
  margin-left:10px;
  font-size:14px;
  color:#333;
  text-align: left;
  float:left;
}
.user-count{
  font-size:13px;
  height:70px;
  padding-top:0px;
}
.user-count .row{
  width:88px;
  text-align: center;
  float:left;
  height:34px;
  margin-top:6px;
  line-height: 30px;
  font-size:12px;
}
.count-btn{
  width:88px;
  height:30px;
  text-align:center;
  line-height:30px;
  font-size:14px;}
.user-container .username p{
  margin:6px 3px;
}
.record-container{
  width:266px;
  padding:12px;
  min-height:280px;
  background:#fff;
  margin-bottom:20px;
  position: relative;
  border-radius: 0px;
}
.cate-title{
  width:266px;
  height:40px;
  position:absolute;
  top:0px;
  left:0px;
  font-size:14px;
  border-bottom:1px solid #f1f3f5;
  // color:#409eff;
  color:#333;
  padding:0px 12px;
}
.cate-title-text{
  height:38px;
  float:left;
  padding:0px 3px;
  // border-bottom:2px solid #409eff;
  line-height:38px;
}
.record-list{
  margin-top:40px;
  width:266px;
}

.record-list .hot-article{
  width:266px;
  color:#666;
  height:30px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.record-list .hot-article:hover{
  color:#409eff;
  cursor:pointer;
}

.record-list  .user-info .photo{
  width:40px;
  height:40px;
  background:#f1f1f1;
  border-radius: 50%;
  margin:2px auto;
  float:left;
  overflow:hidden;
}
.record-list .user-info{
  padding-top:6px;
}
.record-list .user-info .username{
  margin:0px;
  width:200px;
  height:40px;
  margin-left:10px;
  font-size:14px;
  color:#333;
  text-align: left;
  float:left;
}
.record-list .user-info .username:hover{
  color:#409eff;
}
.record-list .user-info .username p{
  margin:0px;
  line-height:24px;
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

.artilce-filter{
  line-height:40px;
  width:830px;
  height:42px;
  background:#fff;
  border-bottom:1px solid #f1f3f5;
}
.filter-menu{
  height:40px;
  margin:0px 12px;
  float:left;
  border-bottom:2px solid #fff;
}
.filter-menu:hover{
  border-color:#409eff;
}
</style>>

