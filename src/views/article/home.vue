<template>
  <!-- 首页主题内容 -->
  <div class="page-container">

    <div class="cate-box">
      <div class="cate-box-inner" >
        <el-link type="primary" :underline="false" style="margin-right:12px;">全部文章</el-link>
        <el-link type="default" :underline="false" style="margin-right:12px;">我的关注</el-link>
        <el-link type="default" :underline="false" style="margin-right:12px;">前端开发</el-link>
        <el-link type="default" :underline="false" style="margin-right:12px;">后端开发</el-link>
        <el-link type="default" :underline="false" style="margin-right:12px;">服务部署</el-link>
        <el-link type="default" :underline="false" style="margin-right:12px;">开发工具</el-link>
        <el-link type="default" :underline="false" style="margin-right:12px;">地理信息</el-link>
        <el-link type="default" :underline="false" style="float:right;margin-top:5px;" @click="$router.push({path:'/cate'})">
          <i class="el-icon-menu" style="position:relative;left:-4px;"></i>全部专栏
        </el-link>
      </div>
    </div>

    <div class="body-container">
      <div class="cate-container" v-if="true">
        <span style="background:#1e80ff;color:#fff;">全部文章</span>
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
        <span>Vant</span>
        <span>ES6</span>
        <span>Uni-app</span>
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
        <!-- 签到 -->
        <div class="sign-in">
          <p style="color:#666;line-height:30px;text-indent:30px;">
            <img src="/images/icon/calender.png" width="24px" style="position:relative;top:0px;" />
            <span style="font-size:17px;margin:0px 22px 0px 10px;">晚上好 !</span>
            <el-button type="primary" round  size="small" @click="$router.push({path:'/datacenter/sigin'})">&nbsp;去签到&nbsp;</el-button>
          </p>
          <p style="line-height:20px;margin-top:20px;font-size:14px;text-indent:30px;color:#86909c;">~ ~您已经连续签到87天~ ~</p>
        </div>
      
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

        <!-- 广告 -->
          <div style="width:269px;height:240px;">
          <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b610e934bd247b89c25bb218d47758a~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" width="100%" alt="">
        </div>
        <div style="width:269px;height:240px;">
          <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57bfdf9550c54e6983345950e10f2555~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" width="100%" alt="">
        </div>
        <!-- 浏览排行 -->
        <div class="record-container">
          <div class="cate-title">
            <div class="cate-title-text">
              <img src="/images/icon/panghang.png" width="18px" style="position:relative;top:2px;"/>  &nbsp;浏览排行
            </div>
          </div>
          <div class="record-list">
            <p class="hot-article" v-for="(item,index) in articleList" style="font-size:13px;" :key="index">
              <!-- <i style="color:#1e80ff;">{{index+1}}、</i> -->
              <span class="record-list-number" :style="{'background':index == 0? '#e7423e' : index == 1? '#ec9121' : index == 2? '#e4ab6e' :''}">{{index+1}}&nbsp;</span>
              <span>{{item.title}}</span>
            </p>
            <div class="more-list">
                <el-link type="default" :underline="false" @click="$router.push({path:'/articlelist'})">查看浏览榜单<i class="el-icon-arrow-right"></i></el-link>
            </div>
          </div>
        </div>
        <!-- 开发者排行 -->
        <div class="record-container">
          <div class="cate-title">
            <div class="cate-title-text">
              <img src="/images/icon/jiangbei.png" width="20px" style="position:relative;top:5px;"/> 作者榜
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

            <!-- <div style="width:100%;height:30px;padding-top:10px;font-size:14px;line-height:30px;text-align:center;color:#007fff;">
              完整榜单 <i class="el-icon-arrow-right" style="font-weight:bold;"></i>
            </div> -->
          </div>
          <div class="more-list">
              <el-link type="default" :underline="false" @click="$router.push({path:'/authorlist'})">查看完整榜单<i class="el-icon-arrow-right"></i></el-link>
          </div>
        </div>
        <!-- 标签 -->
        <div class="record-container">
          <div class="cate-title">
          <div class="cate-title-text">
              <img src="/images/icon/tag.png" width="20px" style="position:relative;top:5px;"/> 文章标签
            </div>
          </div>
          <div class="record-list" style="justify-content: space-around;">
            
              <el-tag type="primary" size="mini"  v-for="(item,index) in links" :key="index" style="margin:4px 3px;font-size:13px;">{{item.name}}</el-tag>
              <p>&nbsp;</p>
          </div>
          <div class="more-list">
              <el-link type="default" :underline="false" @click="$router.push({path:'/tag'})">查看全部标签<i class="el-icon-arrow-right"></i></el-link>
          </div>
        </div>
        <!-- 常用链接 -->
        <div class="record-container">
          <div class="cate-title">
            <div class="cate-title-text">
              <img src="/images/icon/link.png" width="20px" style="position:relative;top:5px;"/> 常用链接
            </div>
          </div>
          <div class="record-list">
          
              <el-link type="default" v-for="(item,index) in links" :key="index" style="margin:4px 8px;font-size:13px;">{{item.name}}</el-link>
              <p>&nbsp;</p>
          </div>
          <div class="more-list">
              <el-link type="default" :underline="false" @click="$router.push({path:'/link'})">查看全部链接<i class="el-icon-arrow-right"></i></el-link>
          </div>
        </div>
        <Footer></Footer>
      </div>
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
      links:[
        {
          name:"GitHub",
          url:"https://www.github.com",
        },{
          name:"Element-UI",
          url:"https://www.github.com",
        },{
          name:"npm",
          url:"https://www.github.com",
        },{
          name:"Oracle",
          url:"https://www.github.com",
        },{
          name:"CSDN",
          url:"https://www.github.com",
        },{
          name:"Node.js",
          url:"https://www.github.com",
        },{
          name:"Vue",
          url:"https://www.github.com",
        },{
          name:"阿里巴巴矢量图标库",
          url:"https://www.github.com",
        },{
          name:"菜鸟教程",
          url:"https://www.github.com",
        },{
          name:"稀土掘金",
          url:"https://www.github.com",
        },{
          name:"SegmentFault",
          url:"https://www.github.com",
        },{
          name:"SuperMap",
          url:"https://www.github.com",
        },{
          name:"W3School",
          url:"https://www.github.com",
        },{
          name:"PHP中文网",
          url:"https://www.github.com",
        },{
          name:"Linux",
          url:"https://www.github.com",
        },{
          name:"MySQL",
          url:"https://www.github.com",
        },{
          name:"Visual Studio Code",
          url:"https://www.github.com",
        },{
          name:"BootStrap",
          url:"https://www.github.com",
        },{
          name:"React",
          url:"https://www.github.com",
        },{
          name:"Element-UI Plus",
          url:"https://www.github.com",
        },{
          name:"GitHub",
          url:"https://www.github.com",
        },{
          name:"Element-UI",
          url:"https://www.github.com",
        },{
          name:"npm",
          url:"https://www.github.com",
        },{
          name:"Oracle",
          url:"https://www.github.com",
        },{
          name:"CSDN",
          url:"https://www.github.com",
        },{
          name:"Node.js",
          url:"https://www.github.com",
        },{
          name:"GitHub",
          url:"https://www.github.com",
        },{
          name:"Element-UI",
          url:"https://www.github.com",
        },{
          name:"npm",
          url:"https://www.github.com",
        },{
          name:"Oracle",
          url:"https://www.github.com",
        },{
          name:"CSDN",
          url:"https://www.github.com",
        },{
          name:"Node.js",
          url:"https://www.github.com",
        },
      ],
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
    // this.getLink();
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
.page-container{
  width:100%;
  padding-top:61px;
}

.cate-box{
  width:100%;
  height:45px;
  border-top:1px solid #f1f3f5;
  background:#fff;
  position:fixed;
  top:60px;
  left:0px;
  z-index:1000;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.cate-box .cate-box-inner{
  width:1024px;
  margin:0px auto;
  height:45px;
  line-height: 40px;
}

.body-container{
  width:1024px;
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
  width:1024px;
  margin-bottom:6px;
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
  padding:4px 8px;
  margin-right:12px;
  background:#fff;
  border-radius:12px;
  font-size:12px;
  color:#71777c;
  margin:0px 10px 8px 0px;
  font-weight:400;
}

.cate-container span:hover{
  color:#1e80ff;
  cursor:pointer;
}
.article-list-container{
  width:740px;
  padding:0px;
  border-radius: 0px;
  float:left;
  background:#fff;
}
.record-list-container{
  width:269px;
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


.sign-in{
  width:239px;
  padding:20px 15px;
  background:#fff;
  margin-bottom:15px;
}
.user-container{
  width:239px;
  padding:15px;
  height:160px;
  background:#fff;
  margin-bottom:15px;
    border-radius:0px;
}
.user-info{
  width:239px;
  height:60px;
  // border-bottom:1px solid #f1f3f5;
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
  width:188px;
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
  width:79px;
  text-align: center;
  float:left;
  height:34px;
  margin-top:6px;
  line-height: 30px;
  font-size:12px;
}
.count-btn{
  width:79px;
  height:30px;
  text-align:center;
  line-height:30px;
  font-size:14px;
  color:#888;  
}
.user-container .username p{
  margin:6px 3px;
}
.record-container{
  width:239px;
  padding:15px;
  min-height:280px;
  background:#fff;
  margin-bottom:15px;
  position: relative;
  border-radius: 0px;
}
.cate-title{
  width:245px;
  height:50px;
  position:absolute;
  top:0px;
  left:0px;
  font-size:14px;
  border-bottom:1px solid #f1f3f5;
  // color:#1e80ff;
  color:#333;
  line-height:50px;
  padding:0px 12px;
}
.cate-title-text{
  height:50px;
  float:left;
  padding:0px 3px;
  // border-bottom:2px solid #1e80ff;
  line-height:50px;
}
.record-list{
  margin-top:50px;
  width:239px;
  text-align: justify;
}

.record-list .hot-article{
  width:239px;
  max-height:38px;
  line-height:24px;
  color:#888;
  overflow:hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  padding:5px 0px;
  margin-bottom:10px;
}
// 浏览排行 序号
.record-list-number{
  display: block;
  width:14px;
  text-align:center;
  float:left;
  padding-left:4px;
  line-height:18px;
  background:#cfcfcf;
  color:#fff;
  border-radius:2px;
  margin-right:6px;
  margin-top:3px;
}
.record-list .hot-article:hover{
  color:#1e80ff;
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
  width:188px;
  height:40px;
  margin-left:10px;
  font-size:14px;
  color:#333;
  text-align: left;
  float:left;
}
.record-list .user-info .username:hover{
  color:#1e80ff;
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
  width:740px;
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
  border-color:#1e80ff;
}
.more-list{
    height:30px;
    border-top:1px solid #f1f1f1;
    line-height:40px;
    text-align: center;
    font-size:14px;
    color:#666;
}
/*标签样式 el-tag*/
::v-deep .el-tag{
  border-radius: 0px;
  cursor: pointer;
}
::v-deep .el-link--inner{
  // color:#71777c;
}
</style>>

