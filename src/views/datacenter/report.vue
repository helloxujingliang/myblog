<template>
    <div class="container">
       <div class="count-container">
            <div class="count-box">
                <p class="count-title">文章数</p>
                <p class="count">65 <span class="count-unit">篇</span></p>
            </div>
             <div class="count-box">
                <p class="count-title">动态数</p>
                <p class="count">11<span class="count-unit">条</span></p>
            </div>
             <div class="count-box">
                <p class="count-title">文章数</p>
                <p class="count">23 <span class="count-unit">篇</span></p>
            </div>
             <div class="count-box">
                <p class="count-title">文章数</p>
                <p class="count">23 <span class="count-unit">篇</span></p>
            </div>
       </div>
       <div class="count-container" style="border-top:1px solid #f1f3f5;">
            <div class="count-box">
                <p class="count-title">总阅读量</p>
                <p class="count">8,234</p>
                <p class="count-trend"><span class="count-trend-btn">昨日+193</span></p>
            </div>
             <div class="count-box">
                <p class="count-title">总点赞量</p>
                <p class="count">654</p>
                <p class="count-trend"><span class="count-trend-btn">昨日+193</span></p>
            </div>
             <div class="count-box">
                <p class="count-title">总评论量</p>
                <p class="count">482</p>
                <p class="count-trend"><span class="count-trend-btn">昨日+193</span></p>
            </div>
             <div class="count-box">
                <p class="count-title">总粉丝量</p>
                <p class="count">143</p>
                <p class="count-trend"><span class="count-trend-btn">昨日无变化</span></p>
            </div>
       </div>

       <div class="lately-container">
            <p>近期文章</p>
            <div class="article-box" v-for="item in latelyArticleList" :key="item">
                <div class="article-info">
                    <p class="article-name">{{item.name}}</p>
                    <p class="article-desc">{{item.desc}}</p>
                </div>
                <div class="article-count">
                    <p class="count">1023</p>
                    <p class="count-title">浏览量</p>
                </div>
                 <div class="article-count">
                    <p class="count">1023</p>
                    <p class="count-title">点赞量</p>
                </div>
                 <div class="article-count">
                    <p class="count">1023</p>
                    <p class="count-title">评论量</p>
                </div>
                 <div class="article-count">
                    <p class="count">1023</p>
                    <p class="count-title">收藏量</p>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"Report",
    data(){
        return {
            latelyArticleList:[
                {
                    name:"MapBoxGL加载GeoJSON点、线、面数据...",
                    desc:"使用MapBoxGL加载GeoJSON点线面数据...",
                },{
                    name:"MapBoxGL加载GeoJSON点、线、面数据...",
                    desc:"使用MapBoxGL加载GeoJSON点线面数据...",
                },{
                    name:"MapBoxGL加载GeoJSON点、线、面数据...",
                    desc:"使用MapBoxGL加载GeoJSON点线面数据...",
                }
            ]
        }
    }
}
</script>
<style scoped>
.container{
    width:764px;
    height:800px;
}
.container .count-container{
    width:764px;
    min-height:60px;
    padding:20px 0px;
    background:#fff;
}
.container .count-container::after{
    content:"";
    display: block;
    clear:both;
    height:0;
    visibility: hidden;
}
.container .count-container .count-box{
    width:191px;
    float:left;
    min-height:60px;
    text-align:center;
}
.container .count-container .count-box .count-title{
    font-size:14px;
    color:#666;
    margin:0px;
}
.container .count-container .count-box .count{
    font-size:24px;
    color:#222226;
    margin:12px 0px;
    font-weight:bold;
}
.container .count-container .count-box .count-unit{
    font-size:12px;
    color:#999;
}
.container .count-container .count-box .count-trend-btn{
    padding:3px 10px;
    background:#f0f0f5;
    border-radius: 12px;
    font-size:12px;
    font-weight:400;
    color:#555666;
}
.lately-container{
    width:724px;
    background:#fff;
    margin-top:20px;
    padding:20px;
}
.lately-container .article-box{
    width:724px;
    height:60px;
    padding:10px 0px;

}

.lately-container .article-box .article-info{
    width:324px;
    height: 60px;
    float:left;
}
.lately-container .article-box .article-info .article-name{
    font-size:14px;
    color:#333;
    font-weight:bold;
    height:40px;
    line-height: 40px;
}

.lately-container .article-box .article-info .article-desc{
    font-size:14px;
    color:#888;
    height:20px;
    line-height: 20px;
}
.lately-container .article-box  .article-count{
    width:100px;
    float:left;
    height:60px;
    text-align: center;
}
.lately-container .article-box  .article-count .count{
    height:40px;
    line-height: 40px;
    color:#333;
    font-weight: bold;
}
.lately-container .article-box  .article-count .count-title{
    font-size:12px;
    color:#888;
        height:20px;
    line-height: 20px;
}
</style>