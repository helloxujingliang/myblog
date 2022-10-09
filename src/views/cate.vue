<template>
    <div class="cate-container">
        <div class="cate-box" v-for="(item,index) in 5" :key="index">
            
            <div class="cate-title"><span style="width:3px;heigh:24px;background:#409eff;margin-right:8px;">&nbsp;</span>前端开发</div>
            <div class="child-cates">
                <div v-for="(item,index) in cateList" :key="index" class="cate-child-box" style="">
                    <div class="article-count">12篇</div>
                    <div style="width:188px;height:100px;overflow:hidden;">
                        <img :src="item.image" width="100%" height="100px" alt="">
                    </div>
                    <p style="width:100%;margin:0px;text-align:center;font-size:13px;color:#aaa;line-height:30px;">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cate",
    data(){
        return {
            cateList:[
                {
                    image:"/images/mybatisplus.png",
                    name:"MyBatis Plus",
                    count:"14",
                },{
                    image:"/images/springboot.png",
                    name:"springboot",
                    count:"14",
                },{
                    image:"/images/nginx.png",
                    name:"Nginx",
                    count:"14",
                },{
                    image:"/images/mysql.png",
                    name:"MySQL",
                    count:"32",
                },{
                    image:"/images/docker.png",
                    name:"Docker",
                    count:"14",
                },{
                    image:"/images/java.png",
                    name:"JAVA SE",
                    count:"14",
                },{
                    image:"/images/redis.jpeg",
                    name:"Redis",
                    count:"14",
                },{
                    image:"/images/swagger.png",
                    name:"Swagger",
                    count:"14",
                }
            ]
        }
    }
}
</script>
<style scoped>
.cate-container{
    width:1140px;
    margin:0px auto;
}
.cate-box{
    width:1116px;
    padding:12px;

}
.cate-box::after{
  content:"";
  display:block;
  clear:both;
  height:0;
  visibility: hidden;
}
.cate-box .cate-title{
    width:1000px;
    height:40px;
    font-size:14px;
    line-height:40px;
    border-bottom: 1px solid #f1f3f5;
    margin-bottom:12px;
}

.cate-box .child-cates{
    width:1000px;
    height:120px;

}
.cate-box .child-cates .article-count{
    padding:2px 8px;
    color:#fff;
    font-size:12px;
    background:red;
    position:absolute;
    top:4px;
    right:4px;
    background-image: linear-gradient(to right,#2afcfc,#4f3edd);
    border-radius:0px;
}

.cate-child-box{
    position:relative;width:188px;margin-right:10px;margin-bottom:10px;height:130px;border:1px solid #f1f1f1;border-radius:0px;overflow:hidden;background:#fff;float:left;
}
.cate-child-box:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
}
</style>