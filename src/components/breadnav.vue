<template>
  <div class="nav-container">
    <el-breadcrumb  separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>前端开发</el-breadcrumb-item>
      <el-breadcrumb-item>MapBox GL</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name:"BreadNav",
  data(){
    return {

    }
  },
  mounted(){

  }
}
</script>
<style scoped>
.nav-container{
  text-indent:6px;
  font-size:12px;
  padding-bottom:15px;
  width:1050px;
  height:15px;
  margin:0px auto;
  line-height:30px;
}
::v-deep .el-breadcrumb__inner{
  font-size:12px;
}
</style>