<template>
    <div>
        <div class="box" v-for="(item,index) in 15" :key="index" >
          <p class="article-title">
            <span class="title"  @click="$router.push({path:'/article'})">【MapBox GL】加载加载GeoJson图层</span>
            
          </p>
          <p class="article-desc">使用MapBox GL加载GeoJson点(circle)、线(line)、面(fill)、图标(symbol)、3D白膜(fill-excetion)图层……</p>
         
          <div class="article-info">
            <div style="float:left;">
              <div class="author-photo">
                  <img src="@/assets/images/head-photo.jpg" alt="" width="30px;">
              </div>
              <span style="color:#333;margin-right:12px;font-size:12px;font-weight:400;">XuJingLiang</span>
            </div>

            <span style="font-size:12px;font-weight:400;"><i class="el-icon-time"></i>&nbsp;2022-009-10 12:33&nbsp;<i class="el-icon-view"></i>&nbsp;448&nbsp;<i class="el-icon-collection-tag"></i>&nbsp;前端开发·MapBox GL &nbsp;</span>

            <span style="font-size:12px;float:right;">
              <el-link style="font-size:12px;margin-right:6px;" type="default" :underline="false"> #Vue2</el-link>
              <el-link style="font-size:12px;margin-right:6px;"  type="default" :underline="false"> #MapBox GL </el-link>
            </span>
          </div>
      </div>
         <!-- 分页 -->
      <div class="pagenation">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
</template>
<style scoped>
.box{
 width:700px;
 height:100px;
 padding:12px;
 background:#fff;
 border-bottom:1px solid #f1f1f1;
 transition: all 0.3s;
 
}
.box p{
  margin:0px;
}
.box .article-title{
  width:100%;
  height:30px;
  color:#333;
  font-size:15px;
  line-height:30px;
  font-weight: bold;
}
.box .article-title .title:hover{
  color:#409eff;
  text-decoration:underline;
}
.box .article-desc{
  width:100%;
  height:40px;
  font-size:13px;
  color:#999;
  line-height:40px;

}

.box:hover{
  background:#fafafa;
  cursor:pointer;
}

.box .article-info{
  width:700px;
  height:34px;
  font-size:14px;
  color:#777;
  float:left;
  line-height:34px;
}
.pagenation{
  width:720px;
  height:50px;
  margin-top:12px;
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
</style>