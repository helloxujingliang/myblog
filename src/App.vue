<template>
  <div id="app">
    <div class="main-container">
      <Header></Header>
      <router-view/>
      <el-backtop ></el-backtop>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
export default {
  name:"App",
  components:{
    Header
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

</style>
