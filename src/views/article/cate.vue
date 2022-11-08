<template>
    <div class="container">
        
        <div class="cate-container" v-for="(item,index) in catelist" :key="index">
            <p class="cate-title">专栏 <span style="font-weight:bold;">·</span> {{item.name}}</p>
            <div class="cate-box" v-for="(it,idx) in item.child" :key="idx">
                <p>
                    <img :src="it.image" width="50px" height="50px" alt="">
                </p>
                <p class="cate-name" @click="$router.push({'path':'/catedetail'})">{{it.name}}</p>
                <p class="cate-desc">JavaScript是由微软公司与1999年设计的网页...</p>
                <p class="cate-desc">{{it.people}}人关注 ·  {{it.article}}篇文章</p>
                <p><el-button type="success" plain size="mini">关注</el-button></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cate",
    data(){
        return {
            catelist:[
                {
                    name:"前端开发",
                    child:[
                        {
                            name:"JavaScript",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/5d70fd6af940df373834.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Vue 2",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Angular",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/7b5c3eb591b671749fee.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Cesium",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/f18965b2a0ef9cac862e.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"MapboxGL",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/e384dbc6d1ab15f046cf.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Angular",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/0cfb4955c418e67c273a.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:32,
                            article:934,
                        },{
                            name:"BootStrap",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/b8018f3bdff97a657304.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:32,
                            article:934,
                        },{
                            name:"TypeScript",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/d788a559489fa6e30b25.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:32,
                            article:934,
                        },{
                            name:"Node.js",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/1544166743138b9f8ed62d9e1cc3d30430dce37eaa402.jpg~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:32,
                            article:934,
                        },{
                            name:"CSS3",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/66de0c4eb9d10130d5bf.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:32,
                            article:934,
                        },{
                            name:"Visiual Studio Code",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/1561116758651a07c4da9f18adb4f9a343915994122cf.jpg~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:489,
                            article:843
                        },{
                            name:"React.js",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/f655215074250f10f8d4.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:843,
                            article:432
                        }
                    ]
                },{
                    name:"后端开发",
                    child:[
                       {
                            name:"Go",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/f4ba2e8ac95d7b81022c.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Redis",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/796f607b1e45a38c61f9.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"SpringBoot",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/1265c034d36735225ac5.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"JSP",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/4045af43b278afc7229b.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"SQL",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/e663fa6cfb28df3fa493.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"SpringBoot",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/f77e4a02edb8b963a2c5.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Linux",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/b49dc843907aa7843a77.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        },{
                            name:"Java",
                            image:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/f8ee3cd45f949a546263.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp",
                            people:382,
                            article:833
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped>
.container{
    width:852px;
    margin:0px auto;
}
.cate-container{
    width:852px;
}
.cate-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.cate-title{
    text-align:center;
    font-size:15px;
    font-weight:bold;
    height: 60px;
    line-height:60px;
    color:#333;
}
.cate-box{
    width:168px;
    padding:25px 15px;
    background:#fafafa;
    margin-right:20px;
    margin-bottom:20px;
    text-align:center;
    float:left;
    /* box-shadow: 0 0 15px rgba(0,0,0,0.1); */
    box-shadow: 0 8px 18px rgb(0 0 0 / 6%);
}
.cate-box:nth-of-type(4n){
   margin:0px;
}
.cate-name{
    font-size:18px;
    margin-top:12px;
    cursor: pointer;
}
.cate-name:hover{
    color:#1e80ff;
}
.cate-desc{
    font-size:14px;
    color:#71777c;
    margin:12px 0px;
}
/* ::v-deep .el-button{
    border-radius:0px;
} */
</style>