<template>
    <div class="topic-container">
        <div class="left-container">
            <div style="border-bottom:1px solid #f1f3f5;padding-bottom:20px;">
                <span>话题广场</span>
            </div>
            <div class="topic-box" v-for="(item,index) in topicList" :key="index">
                <div class="topic-box-info">
                    <p class="topic-name"><img src="/images/icon/huati.png" style="position:relative;top:3px;left:-3px;" alt="" width="18px">{{item.title}}</p>
                    <p class="topic-desc">{{item.desc}}</p>
                    <p class="topic-count">{{item.count}}条精彩内容</p>
                </div>
                <div class="topic-box-image">
                    <img :src="item.image" alt="">
                </div>
            </div>
        </div>
        <div class="right-container"></div>
    </div>
</template>
<script>
export default {
    name:"Topic",
    data(){
        return {
            topicList:[
                {
                    title:"怎么看待996？",
                    desc:"996工作制为何如此盛行？双休的周末甚至成为了一些公司的招聘福利，大家是怎么看待996加班的风气的呢？",
                    count:"434",
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3aba020feec45fc838422e624eb35de~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
                },
                {
                    title:"迷惑bug大赏",
                    desc:"哈？这也能行！写代码时你遇到过什么迷惑行为？快进来悄悄吐槽一下那些你见过的“牛人”……",
                    count:"157",
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb7372f7b721443bbaad2c52591b823a~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
                },
                {
                    title:"年轻人要不要裸辞？",
                    desc:"很多人因为工作的不如意选择裸辞，但也有人坚持骑驴找马，找到下家再走。哪种选择比较好呢，想听听大家的看法",
                    count:"234",
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d44216f980554c32aa7c8cc3c7d60fb6~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
                },
                {
                    title:"找工作是兴趣优先还是工资优先？",
                    desc:"从小就听到一句俗语“兴趣是最好的老师”，但是在现实工作中，对很多人来说工资才是基本的生活保障。兴趣优先，还是工资优先？你心里的天平会倾向哪一边呢？",
                    count:"54",
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/623c31ed66b046c9b26c714a3a8c7d47~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
                },{
                    title:"不一样的我",
                    desc:"晒一张照片，并分享照片背后的故事，展示自己的另一面，也可以挑战不可能！比如从来不做饭的我，第一次下厨做了碗面；平时不修边幅的我，今天特别打扮了一番；已经半年运动的我，也开始去健身了。",
                    count:"77",
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/480b3978e3eb4fa993c0d0ad2dac1bcb~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",
                }
            ]
        }
    }
}
</script>
<style scoped>
.topic-container{
    width:1024px;
    margin:0px auto;
}
.topic-container .left-container{
    width:984px;
    float:left;
    padding:20px;
    background:#fff;
}
.topic-container .left-container .topic-box{
    width:984px;
    padding:10px 0px;
    border-bottom:1px solid #f1f3f5;
}
.topic-container .left-container .topic-box::after{
      content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.topic-box-info{
    width:860px;
    float:left;
}
.topic-box-info .topic-name{
    font-size:15px;
    margin-bottom:6px;
}
.topic-box-info .topic-desc{
    font-size:14px;
    padding-left:20px;
    margin:8px 0px;
    line-height:24px;
    color:#777;
}
.topic-count{
    font-size:12px;
    padding-left:20px;
    margin:0px;
    color:#777;
}
.topic-box-image{
    width:80px;
    height:80px;
    margin:12px 0px;
    float:right;
}
.topic-box-image img{
    width:80px;
    height:80px;
}
</style>