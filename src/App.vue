<template>
  <div id="app">
    <div class="main-container">
      <router-view/>
      <el-backtop ></el-backtop>
    </div>
    <div class="bg-container">

    </div>
  </div>
</template>
<script>
export default {
  name:"App",
  components:{
    
  },
  data(){
    return {
      breadNavShow:false,
    }
  },
}
</script>
<style lang="scss">

html,body{
  padding:0px;
  margin:0px;
  background:#f1f3f5;
}

html{
  
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-container{
  margin:0px auto;
  position: relative;
  z-index:2;
}

.bg-container{
  width:100vw;
  height:100vh;
  background:url(./assets/images/app-bg-3.png);
  background-repeat:no-repeat;
  background-size:100vw 110vh;
  position:fixed;
  top:0px;
  left:0px;
}
/* 滑道样式 */
*::-webkit-scrollbar{
  width:8px;
  background:rgba(0,0,0,0.1);
  border-radius: 6px;
}
/* 定义滑块的样式 */
*::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);
  background-color:rgba(0,0,0,0.1);
}
/* 定义滑块鼠标移入时的样式 */
*::-webkit-scrollbar-thumb:hover{
  border-radius: 10px;
  -webkit-box-shadow:inset 0 0 6px rgba(255,255,255,0.3);
  background-color:rgba(255,255,255,0.3);
}

</style>
