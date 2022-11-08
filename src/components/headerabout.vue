<template>
      <div class="site-header" :style="{'height':showChildMenu?'60px':'60px'}">
        <div class="inner">
          <div class="logo-info" @click="$router.push({path:'/'})">
            <div class="logo" >
              <img src="/images/logo-about-1.png" width="40px" alt="">
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
            <!-- <div class="menu-children">
              <span style="padding:2px 2px;line-height:8px;background:#ee502f;color:#fff;font-size:8px;position:absolute;right:-20px;top:8px;border-radius:7px;">new</span>
              <el-link :type="pageName == 'job' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/job'})">工作招聘</el-link>
            </div> -->

            <div class="menu-children">
              <el-link :type="pageName == 'about' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/about'})">关于我们</el-link>
            </div>

            <!-- <div class="menu-children">
              <el-link :type="pageName == 'about' ? 'primary' : 'default'" :underline="false" @click="$router.push({path:'/job'})">关于我们</el-link>
            </div> -->
          </div>
        <!-- 用户中心 -->
            <el-popover
                placement="bottom"
                title=""
                width="260"
                trigger="hover"
                content="">
              <div class="user-center-popup">
                <div class="user-photo" style="width:100%;height:60px;" @click="$router.push({path:'/datacenter'})">
                  <div style="width:40px;height:40px;float:left;">
                    <img src="/images/photo/liuhui.png" width="40px" alt="">
                  </div>
                  <div style="width:120px;height:30px;float:left;margin-left:15px;">
                    <p style="margin:0px;">吃饭睡觉打代码</p>
                    <p style="margin:6px 0px;font-size:12px;color:#999;">IP属地：山东省</p>
                  </div>
                </div>
                <div style="width:244px;padding:8px;height:40px;background:#ecf3ff;border-radius:4px;">
                  <p style="margin:0px;height:30px;">
                    <span style="float:left;color:#409eff;font-size:13px;font-weight:bold;">等级:5</span>
                    <span style="float:right;color:#409eff;font-size:12px;">854/1000></span>
                  </p>
                  <el-progress :percentage="75" :show-text="false"></el-progress>
                </div>
                <div style="width:260px;height:200px;margin-top:15px;">
                  <div class="user-center-popup-btn" @click="$router.push({path:'/usercenter'})">
                    <img src="/images/icon/usercenter.png"   alt="">
                    我的主页
                  </div>
                   <div class="user-center-popup-btn">
                    <img src="/images/icon/liwu.png"  alt="">
                    成长福利
                  </div>
                   <div class="user-center-popup-btn">
                    <img src="/images/icon/setting.png"  alt="">
                    个人设置
                  </div>
                   <div class="user-center-popup-btn">
                    <img src="/images/icon/logout.png"  alt="">
                    退出登录
                  </div>
                </div>
              </div>

            <div class="user-center" slot="reference">
              <img src="/images/photo/liuhui.png" width="30px" alt="">
            </div>

            <!-- <div class="search" >
              <el-input size="mini" style="width:220px;height:20px;position:relative;top:0px;text-align:left;" placeholder="请输入关键词进行搜索"></el-input>
              <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
            </div> -->
          </el-popover>

         
          <!-- 消息中心 -->
          <div class="notice-center">
            <el-badge :value="3" class="item" size="mini">
              <!-- <i class="el-icon-message-solid" style="font-size:20px;"></i> -->
              <img src="/images/icon/notice.png" width="18px" alt="">
            </el-badge>
          </div>
          <!-- 文章写作 -->
          <div class="register-and-login">
            <el-button type="primary" size="mini" icon="el-icon-edit" round @click="$router.push({path:'/write'})">创作文章</el-button>
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
  width:100%;
  height:60px;
  /* margin-bottom:15px; */
}
.site-header{
  width:100%;
  height:60px;
  background:none;
  position:fixed;
  top:0px;
  left:0px;
  z-index:999;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  /* background: rgba(0,0,0,0.5); */
  
}
.site-header .cate-box{
  width:100%;
  height:45px;
}
.site-header .cate-box .cate-box-inner{
  width:1024px;
  margin:0px auto;
  height:45px;
  line-height: 40px;
}
.site-header .inner{
  /* width:1050px; */
  max-width:1360px;
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
  color:#fff;
  font-weight: 600;
  font-size:14px;
  min-width:70px;
  height:60px;
  line-height:60px;
}
.site-header .logo img{
  width:32px;
  margin-top:14px;
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
  border-radius: 0px;
  border-top-left-radius:16px;
  border-bottom-left-radius:16px;
}

::v-deep .el-link--inner{
  color:#fff;
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
  background:none;
}

.user-center-popup{
  width:200px;
  height:200px;

}

.user-center-popup .user-photo{
  cursor:pointer;
}
.user-center-popup-btn{
  width:110px;height:40px;float:left;line-height:40px;color:#666;margin:0px 10px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;

}
.user-center-popup-btn:hover{
  background:none;
}
.user-center-popup-btn img{
  width:15px;
  position:relative;
  top:2px;
}
::v-deep .el-link.el-link--default{
  color:#71777c;
}
</style>