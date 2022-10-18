<template>
    <div class="site-header-container" :style="{'height':showChildMenu?'106px':'60px'}">
      <div class="site-header" :style="{'height':showChildMenu?'106px':'60px'}">
        <div class="inner">
          <div class="logo-info" @click="$router.push({path:'/'})">
            <div class="logo" >
              <img src="@/assets/images/head-photo.jpg" alt="">
            </div>
            <div class="logo-name">
            JavaCat
            </div>
          </div>
        
          <div class="menu">
            <div class="menu-children">
              <el-link :type="pageName == 'index' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/'})">首页</el-link>
            </div>

            <div class="menu-children">
              <span style="padding:2px 2px;line-height:8px;background:#ee502f;color:#fff;font-size:8px;position:absolute;right:-18px;top:8px;border-radius:7px;">hot</span>
              <el-link :type="pageName == 'feelfish' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/feelfish'})">上班摸鱼</el-link>
            </div>

            <!-- <el-popover
                placement="bottom"
                title=""
                width="560"
                trigger="hover"
                content="">
              <div v-for="(item,index) in cateTree" :key="index" class="cate-container">
                <p style="color:#409eff;font-size:13px;margin:8px 0px;border-bottom:1px solid #eee;line-height:22px;padding-bottom:3px;cursor:pointer;">{{item.name}}>></p>
                <p style="line-height:20px;margin:4px 0px;" v-for="(it,idx) in item.children" :key="idx"><el-link type="default" style="font-size:12px;" :underline="false">{{it.name}}</el-link></p>
                
              </div> -->
              <div class="menu-children" slot="reference">
                  <el-link :type="pageName == 'study' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/study'})">课程学习</el-link>
              </div>
            <!-- </el-popover> -->
          
            <div class="menu-children">
              <el-link :type="pageName == 'activity' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/activity'})">活动中心</el-link>
            </div>
            <!-- <div class="menu-children">
              <el-link :type="pageName == 'link' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/link'})"></el-link>
            </div> -->
            <div class="menu-children">
              <span style="padding:2px 2px;line-height:8px;background:#ee502f;color:#fff;font-size:8px;position:absolute;right:-20px;top:8px;border-radius:7px;">new</span>
              <el-link :type="pageName == 'job' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/job'})">工作招聘</el-link>
            </div>

            <div class="menu-children">
              <el-link :type="pageName == 'about' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/job'})">任务兼职</el-link>
            </div>

            <!-- <div class="menu-children">
              <el-link :type="pageName == 'about' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/job'})">关于我们</el-link>
            </div> -->
          </div>
        <!-- 用户中心 -->
          <div class="user-center">
            <img src="/images/site-icon.jpg" width="30px" alt="">
          </div>
          <!-- 消息中心 -->
          <div class="notice-center">
            <el-badge :value="3" class="item" size="mini">
              <i class="el-icon-message-solid" style="font-size:20px;"></i>
            </el-badge>
          </div>
          <!-- 文章写作 -->
          <div class="register-and-login">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="$router.push({path:'/write'})">创作文章</el-button>
          </div>
          <!-- 搜索 -->
          <el-popover
                placement="bottom"
                title=""
                width="260"
                trigger="hover"
                content="">
            <div class="hot-search">
                <div><span style="width:30px;padding:4px 8px;background:#fe2d46;color:#fff;margin-right:6px;border-radius:4px;">1</span>MapBoxGL数据过滤</div>
                <div><span style="width:30px;padding:4px 8px;background:#f60;color:#fff;margin-right:6px;border-radius:4px;">2</span>SpringBoot Token验证登录</div>
                <div><span style="width:30px;padding:4px 8px;background:#faa90e;color:#fff;margin-right:6px;border-radius:4px;">3</span>SuperMap for Cesium数据加载</div>
            </div>
          <div class="search" slot="reference">
            <el-input size="mini" style="width:220px;height:20px;position:relative;top:0px;text-align:left;" placeholder="请输入关键词进行搜索"></el-input>
            <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
          </div>
          </el-popover>
        </div>
        <!-- 文章大分类 -->
        <div class="cate-box" v-if="pageName == 'index' || pageName == 'study' && showChildMenu">
          <div class="cate-box-inner" >
            <el-link type="primary" :underline="false" style="margin-right:12px;">全部文章</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">我的关注</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">前端开发</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">后端开发</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">服务部署</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">开发工具</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">地理信息</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">
              全部分类<i class="el-icon-caret-right" style="position:relative;left:-4px;"></i>
            </el-link>
          </div>
        </div>
        <div class="cate-box" v-if="pageName == 'feelfish' && showChildMenu">
          <div class="cate-box-inner" >
            <el-link type="primary" :underline="false" style="margin-right:12px;">综合</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">上班摸鱼</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">吐槽一下</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">今日问答</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">技术人生</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">打工人日常</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">搬砖日常</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">
              全部圈子<i class="el-icon-caret-right" style="position:relative;left:-4px;"></i>
            </el-link>
          </div>
        </div>
        <!-- 城市 -->
        <div class="cate-box" v-if="pageName == 'activity' && showChildMenu">
          <div class="cate-box-inner">
            <el-link type="primary" :underline="false" style="margin-right:12px;">全部活动</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">北京</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">上海</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">广州</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">深圳</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">杭州</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">武汉</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">成都</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">青岛</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">济南</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">苏州</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">南京</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">长沙</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">
              更多城市<i class="el-icon-caret-right" style="position:relative;left:-4px;"></i>
            </el-link>
          </div>
        </div>
        <!-- 工作招聘 -->
        <div class="cate-box" v-if="pageName == 'job' && showChildMenu">
          <div class="cate-box-inner" >
            <el-link type="default" :underline="false" style="margin-right:12px;">综合</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">前端开发</el-link>
            <el-link type="primary" :underline="false" style="margin-right:12px;">后端开发</el-link>
            <el-link type="default" :underline="false" style="margin-right:12px;">
              全部分类<i class="el-icon-caret-right" style="position:relative;left:-4px;"></i>
            </el-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name:"Header",
  data(){
    return {
      cateTree:null,
      pageName:null,
      showChildMenu:false,
    }
  },
  watch:{
    '$route':function(e){
      this.pageName = e.meta.name;
      if(e.meta.childMenu){
        this.showChildMenu = true;
      }else{
        this.showChildMenu = false;
      }
    }
  },
  created(){
    if(this.$route.meta.childMenu){
      this.showChildMenu = true;
    }else{
      this.showChildMenu = false;
    }
    this.setPageName();

  },
  mounted(){
    // this.getCateTree();
  },
  methods:{
    setPageName(){
      this.pageName = this.$route.meta.name;
    },
    getCateTree(){
      this.$axios({
        url:"http://localhost:8081/catelist",
        method:"get",

      }).then(res=>{
        this.cateTree = res.data;
      }).catch(error=>{

      })
    }
  }
}
</script>
<style scoped>
.site-header-container{
  width:100%;height:106px;margin-bottom:15px;
}
.site-header{
  width:100%;
  height:106px;
  background:#ffffff;
  margin-bottom:15px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  position:fixed;top:0px;left:0px;z-index:999;
}
.site-header .cate-box{
  width:100%;
  height:45px;
  border-top:1px solid #f1f3f5;
}
.site-header .cate-box .cate-box-inner{
  width:1140px;
  margin:0px auto;
  height:45px;
  line-height: 40px;
  text-indent: 6px;
}
.site-header .inner{
  /* width:1050px; */
  max-width:1160px;
  padding:0px 0px;
  height:60px;
  margin:0px auto;
}
.site-header .inner .logo-info{
  height:60px;
  width:120px;
  float:left;
  cursor:pointer;
}
.site-header .logo{
  width:50px;
  height:60px;
  float:left;
}
.site-header .logo-name{
  float:left;
  /* color:#323232; */
  color:#163158;
  font-weight: 600;
  font-size:14px;
  min-width:70px;
  height:60px;
  line-height:60px;
}
.site-header .logo img{
  width:50px;
  margin-top:0px;
}

.site-header .menu{
  min-width:100px;
  float:left;
  height:60px;
  line-height:55px;
  padding:0px 10px;
}

.menu-children{
  margin:0px 12px;
  padding:0px 2px;
  float:left;
  height:58px;
  position: relative;
  border-bottom:2px solid #ffffff;
  transition:all 0.3s;
}
.menu-children:hover{
  border-color:#409eff;
}
.site-header .search{
  float:right;
  line-height: 60px;
  margin-right:12px;
}

/* 8a919f */
/* 1e80ff */
/* f1b815 */
.user-center{
  float:right;
  margin-top:18px;
  margin-left:10px;
  width:30px;
  height:30px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
}
.notice-center{
  width:60px;
  height:60px;
  float:right;
  line-height:60px;
  text-align: center;
  font-size:24px;
  color:#888;
}
::v-deep .notice-center .el-badge__content{
  top:12px;
}
.register-and-login{
  float:right;
  height:60px;
  line-height: 60px;
  min-width:100px;
}

::v-deep .search .el-input__inner{
  border:1px solid #409eff;
  border-radius: 0px;
  border-top-left-radius:16px;
  border-bottom-left-radius:16px;
}

::v-deep .search .el-button{
  border-radius: 0px;
  border-top-right-radius:16px;
  border-bottom-right-radius:16px;
}

.cate-container{
  width:160px;
  margin:0px 12px;
  float:left;
  line-height:20px;
}
.hot-search div{
  height:30px;
  width:250px;
  padding-left:10px;
  line-height:30px;
  color:#666;
  cursor:pointer;
  font-size:12px;
}

.hot-search div:hover{
  background:#f1f2f3;
}
</style>