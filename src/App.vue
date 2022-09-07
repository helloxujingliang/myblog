<template>
  <div id="app">
    <div class="main-container">
      <Header></Header>
      <BreadNav></BreadNav> 
      <router-view/>
      <el-backtop ></el-backtop>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header.vue';
import BreadNav from '@/components/breadnav.vue';
export default {
  name:"App",
  components:{
    Header,
    BreadNav
  },
  data(){
    return {

    }
  }
}
</script>
<style lang="scss">

html,body{
  padding:0px;
  margin:0px;
  background:#f4f5f5;
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
}

/* 滑道样式 */
*::-webkit-scrollbar{
  width:5px;
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
