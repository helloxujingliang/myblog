<template>
  <div id="app">
    <div class="main-container">
      <Header></Header>
      <BreadNav></BreadNav> 
      <router-view/>
      <Footer></Footer>
      <el-backtop ></el-backtop>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header.vue';
import BreadNav from '@/components/breadnav.vue';
import Footer from '@/components/footer.vue'
export default {
  name:"App",
  components:{
    Header,
    BreadNav,
    Footer
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
