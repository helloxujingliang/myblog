<template>
  <div class="site-header">
    <div class="inner">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="logo-name">
       HopetryCodebase
      </div>
      <div class="menu">
         <el-dropdown style="margin:0px 12px;" size="small" v-for="(item,index) in cateTree" :key="index">
          <span class="el-dropdown-link">
            <el-link type="default" :underline="false">{{item.name}}</el-link>
            <!-- <i class="el-icon-arrow-down el-icon--right" style="position:relative;top:2px;"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(it,idx) in item.children" :key="idx">{{it.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
     
      <div class="register-and-login">
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="$router.push({path:'/write'})">申请创作者</el-button>
        <!-- <el-button type="primary" size="mini" plain>登 录</el-button> -->
        <!-- <el-link :underline="false" style="margin-left:16px;" type="primary"></el-link> -->
      </div>

       <div class="search">
        <el-input size="mini" style="width:220px;height:20px;margin-right:8px;position:relative;top:0px;text-align:left;" placeholder="请输入关键词进行搜索"></el-input>
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
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
    }
  },
  created(){
    
  },
  mounted(){
    this.getCateTree();
  },
  methods:{
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
.site-header{
  width:100%;
  height:60px;
  background:#ffffff;
  margin-bottom:15px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.site-header .inner{
  width:1050px;
  height:60px;
  margin:0px auto;
}
.site-header .logo{
  width:24px;
  height:60px;
  float:left;
}
.site-header .logo-name{
  float:left;
  color:#323232;
  font-weight: 550;
  font-size:13px;
  min-width:90px;
  height:60px;
  line-height:60px;
  margin-left:10px;
}
.site-header .logo img{
  width:24px;
  margin-top:18px;
}

.site-header .menu{
  min-width:100px;
  float:left;
  height:60px;
  line-height:55px;
  padding:0px 24px;
}
.site-header .search{
  float:right;
  line-height: 60px;
  margin-right:12px;
}
.register-and-login{
  float:right;
  height:60px;
  line-height: 60px;
  min-width:100px;
}

::v-deep .el-input__inner{
  border:1px solid #409eff;
  border-radius: 3px;
}

::v-deep .el-button{
  border-radius: 3px;
}
</style>