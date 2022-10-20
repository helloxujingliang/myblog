<template>
  <div class="circle-container">
    <div class="left-container">
      <div style="border-bottom:1px solid #f1f3f5;padding:20px;background:#fff;">
        <span style="16px;font-weight:bold;color:#333;">我的圈子</span>
      </div>
      <div class="circle-container-inner" style="margin-bottom:20px;">
        <div class="circle-box" v-for="(item,index) in hotCircleList" :key="index">
          <div class="image">
            <img :src="item.image" />
          </div>
          <div class="circle-info">
            <p style="margin:0px;">{{item.name}}</p>
            <p style="margin:12px 0px;margin-bottom:0px;font-size:12px;color:#777;">234人 · 8384条内容</p>
            <el-link type="primary" :underline="false">+点击加入</el-link>
          </div>
        </div>
      </div>

      <div style="border-bottom:1px solid #f1f3f5;padding:20px;background:#fff;">
        <span style="16px;font-weight:bold;color:#333;">圈子广场</span>
        <div style="width:300px;height:40px;float:right;">
            <el-input placeholder="请输入内容" size="mini" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
      </div>
      <div class="circle-container-inner">
        <div class="circle-box" v-for="(item,index) in circleList" :key="index">
          <div class="image">
            <img :src="item.image" />
          </div>
          <div class="circle-info">
            <p style="margin:0px;">{{item.name}}</p>
            <p style="margin:12px 0px;margin-bottom:0px;font-size:12px;color:#777;">234人 · 8384条内容</p>
            <el-link type="primary" :underline="false">+点击加入</el-link>
          </div>
        </div>
      </div>
    </div>

     <div class="right-container">
       <div class="cate-title">
         人气圈子
       </div>
       <div class="hot-circle-box" v-for="(item,index) in hotCircleList" :key="index">
         <div class="hot-circle-box-image">
           <img :src="item.image" />
         </div>
         <div class="hot-circle-box-info">
            <p style="margin:0px;">{{item.name}}</p>
            <p style="margin:4px 0px;font-size:12px;color:#777;">来分享下你上班的好东西吧~</p>
            <p style="margin:0px;font-size:12px;color:#777;">234人 · 8384条内容</p>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      circleList:[
        {
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/280733f52ebc4ac68cdd873a01e5c4ae~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
          name:"上班摸鱼",
          count:1281,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b91cfa473627480bb2250171c7fdba70~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"开发工具推荐",
          count:4557,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58e1c5f05e7e4fc9b978d2c312958b5e~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"技术交流",
          count:64674,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e21fac7cf34f58b534bd73f1c6caa9~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"好友问答",
          count:256,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45824f4739314223b162d09f45f8549f~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"树洞一下",
          count:5796,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34b087f5fe6e41188a4746fe71518586~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"今日新鲜事",
          count:346,
        }, {
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00c7adec190747709805d921cf8760cd~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"舌尖上的JavaCat",
          count:757,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a004c78c2654b7d97d53562b20e3f95~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"今天学到了",
          count:76746,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f728b50478064d189f10f8afd2e49132~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"Cat相亲角",
          count:1281,
        },{
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/280733f52ebc4ac68cdd873a01e5c4ae~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
          name:"上班摸鱼",
          count:1281,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b91cfa473627480bb2250171c7fdba70~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"开发工具推荐",
          count:4557,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58e1c5f05e7e4fc9b978d2c312958b5e~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"技术交流",
          count:64674,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e21fac7cf34f58b534bd73f1c6caa9~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"好友问答",
          count:256,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45824f4739314223b162d09f45f8549f~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"树洞一下",
          count:5796,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34b087f5fe6e41188a4746fe71518586~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"今日新鲜事",
          count:346,
        }, {
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00c7adec190747709805d921cf8760cd~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"舌尖上的JavaCat",
          count:757,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a004c78c2654b7d97d53562b20e3f95~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"今天学到了",
          count:76746,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f728b50478064d189f10f8afd2e49132~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"Cat相亲角",
          count:1281,
        },{
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/280733f52ebc4ac68cdd873a01e5c4ae~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
          name:"上班摸鱼",
          count:1281,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b91cfa473627480bb2250171c7fdba70~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"开发工具推荐",
          count:4557,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58e1c5f05e7e4fc9b978d2c312958b5e~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"技术交流",
          count:64674,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e21fac7cf34f58b534bd73f1c6caa9~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"好友问答",
          count:256,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45824f4739314223b162d09f45f8549f~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"树洞一下",
          count:5796,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34b087f5fe6e41188a4746fe71518586~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"今日新鲜事",
          count:346,
        }, {
          image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00c7adec190747709805d921cf8760cd~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"舌尖上的JavaCat",
          count:757,
        },
      ],
      hotCircleList:[
         {
          image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/280733f52ebc4ac68cdd873a01e5c4ae~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
          name:"上班摸鱼",
          count:1281,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b91cfa473627480bb2250171c7fdba70~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"开发工具推荐",
          count:4557,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58e1c5f05e7e4fc9b978d2c312958b5e~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"技术交流",
          count:64674,
        }, {
          image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e21fac7cf34f58b534bd73f1c6caa9~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"好友问答",
          count:256,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45824f4739314223b162d09f45f8549f~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"树洞一下",
          count:5796,
        }, {
          image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34b087f5fe6e41188a4746fe71518586~tplv-k3u1fbpfcp-no-mark:200:200:200:200.awebp?",
          name:"今日新鲜事",
          count:346,
        }, 
      ]
    }
  }
}
</script>
<style scoped>
.circle-container{
  width:1024px;
  background:#fff;
  margin:0px auto;
}
.left-container{
  width:740px;
  float:left;

}
.left-container::after{
    content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}

.circle-container-inner{
  width:100%;
  padding-top:20px;
    background:#fff;
}
.circle-container-inner::after{
    content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.circle-box{
  widows: 200.6px;;
  height:72px;
  padding:20px;
  float:left;
}
.circle-box .image{
  width:68px;
  height:68px;
  float:left;
}
.circle-box .image img{
  width:55px;
  height:55px;
  border-radius: 5px;
}
.circle-box .circle-info{
  float:left;
  width:124px;
  height:72px;
  padding-left:10px;
}
.right-container{
  width:239px;
  float:right;
  background:#fff;
  padding:15px;
}
.cate-title{
  padding-bottom:15px;
  border-bottom:1px solid #f1f3f5;
}
.hot-circle-box{
  width:239px;
  height:60px;
  padding:15px 0px;

}
.hot-circle-box-image{
  width:60px;
  height: 60px;
  float:left;
}
.hot-circle-box-image img{
  width:50px;
  height: 50px;
  border-radius:5px;
}
.hot-circle-box-info{
  float:left;
  width:170px;
  padding-left:9px;
}
</style>