<template>
    <div>
        <div class="box" v-for="(item,index) in 15" :key="index" >
          <p class="article-title" @click="$router.push({path:'/article'})">【MapBox GL】加载加载GeoJson图层</p>
          <p class="article-desc">使用MapBox GL加载GeoJson点(circle)、线(line)、面(fill)、图标(symbol)、3D白膜(fill-excetion)图层……</p>
          <p class="article-info">
            <span style="margin-right:12px;"><i class="el-icon-collection-tag"></i>&nbsp;前端开发·MapBox GL</span>
            <span><i class="el-icon-time"></i>&nbsp;2022-009-10 12:33</span>
            <span style="margin:0px 24px;"><i class="el-icon-view"></i>&nbsp;448</span>
            <!-- <el-tag size="mini" style="margin:0px 4px;">Vue2</el-tag>
            <el-tag size="mini" style="margin:0px 4px;">mapbox gl</el-tag> -->
            <span style="float:right;font-size:12px;">
              <el-link style="font-size:12px;margin-right:6px;" type="default" :underline="false"> <strong style="color:#666;">#</strong>Vue2</el-link>
              <el-link style="font-size:12px;margin-right:6px;"  type="default" :underline="false"> <strong style="color:#666;">#</strong>MapBox GL </el-link>
            </span>
          </p>
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
 width:690px;
 height:100px;
 padding:15px;
 background:#fff;
 border-bottom:1px solid #f1f1f1;
 transition: all 0.3s;
 
}
.box p{
  margin:0px;
}
.box .article-title{
  width:100%;
  height:40px;
  color:#333;
  font-size:15px;
  font-weight: bold;
}
.box .article-title:hover{
  text-decoration:underline;
}
.box .article-desc{
  width:100%;
  height:40px;
  font-size:13px;
  color:#999;
}

.box:hover{
  background:#fafafa;
  cursor:pointer;
}

.box .article-info{
  height:30px;
  font-size:13px;
  color:#999;
}
.pagenation{
  width:720px;
  height:50px;
  margin-top:12px;
}
</style>