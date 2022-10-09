<template>
    <div class="club-container">
        <div class="cate-container">
            <span style="background:#4093ff;color:#fff;">综合</span>
            <span>上班摸鱼</span>
            <span>吐槽一下</span>
            <span>今日问答</span>
            <span>招聘广场</span>
            <span>技术人生</span>
            <span>打工人日常</span>
        </div>

        <!-- <div class="menu-container">
            <ul>
                <li><i class="el-icon-time"></i>&nbsp;最新发布</li>
                <li><i class="el-icon-time"></i>&nbsp;热门帖子</li>
                <li>
                    <i class="el-icon-picture-outline-round"></i>&nbsp;谈论圈子
                        <p class="quanzi">上班摸鱼</p>
                        <p class="quanzi">吐槽一下</p>
                        <p class="quanzi">技术人生</p>
                        <p class="quanzi">今日新鲜事</p>
                        <p class="quanzi">今日问答</p>
                        <p class="quanzi">打工人日常</p>
                        <p class="quanzi">沙雕表情包</p>
                        <p class="quanzi">搞笑段子</p>
                        <p class="quanzi">招聘广场</p>
                        <p class="quanzi">技术交流</p>
                        <p class="quanzi">树洞一下</p>
                        <p class="quanzi">舌尖上的</p>
                        <p class="quanzi">今天学到了</p>
                </li>
                
                
            </ul>
        </div> -->
        <div class="news-container">
            <div class="artilce-filter">
                <div class="filter-menu" style="border-color:#409eef;">
                <el-link type="primary" style="font-size:12px;" :underline="false">最新发布</el-link>
                </div>
                <div class="filter-menu">
                <el-link type="default" style="font-size:12px;" :underline="false">热门帖子</el-link>
                </div>
                
            </div>

            <div class="news" v-for="(item,index) in newsList" :key="index">
                <div class="user-info">
                    <div class="photo">
                        <img :src="item.photo" alt="">
                    </div>
                    <div class="user-name">
                        <p class="username">{{item.username}}</p>
                        <p class="time">前端开发工程师 · 发布于{{item.time}} <el-tag type="primary" size="mini">@上班摸鱼</el-tag></p>
                    </div>
                </div>
                <div class="content">
                    <div class="text-content">
                        {{item.content}}
                        <el-link type="primary" :underline="false">#上班摸鱼</el-link>
                        &nbsp;
                        <el-link type="primary" :underline="false">#吐槽大会</el-link>
                    </div>
                    <div class="img-content" v-show="index%3 == 1">
                        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80964fc13fe64bd99d370698db05b47e~tplv-k3u1fbpfcp-zoom-mark-crop-v2:460:460:0:0.awebp?" height="120px"/>
                        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3818e4f7f86c4182ace4e05a1be6a66d~tplv-k3u1fbpfcp-zoom-mark-crop-v2:460:460:0:0.awebp?" height="120px" />
                        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/506b8d27f4d2448e9e8322f6cf422772~tplv-k3u1fbpfcp-zoom-mark-crop-v2:460:460:0:0.awebp?" height="120px" />
                        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea940f07bfa94499a75f551d23101fe6~tplv-k3u1fbpfcp-zoom-mark-crop-v2:240:240:0:0.awebp?" height="120px"/>
                        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c82a68044d647dd8270e2131fdb7b4b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:460:460:0:0.awebp?" height="120px" />
                    </div>

                </div>

                <div class="operate">
                    <el-row>
                        <el-col :span="8" style="font-size:12px;line-height:30px;text-align:center;color:#777;">
                            <img src="/images/icon/fenxiang.png" alt="" width="18px" style="position:relative;top:3px;">
                            分享
                        </el-col>
                        <el-col :span="8" style="font-size:12px;line-height:30px;text-align:center;color:#777;">
                            <img src="/images/icon/pinglun-b.png" alt="" width="18px" style="position:relative;top:3px;">
                            评论（{{index}}）
                        </el-col>
                        <el-col :span="8" style="font-size:12px;line-height:30px;text-align:center;color:#777;">
                            <img src="/images/icon/good.png" alt="" width="18px" style="position:relative;top:3px;">
                            点赞（1{{index}}）
                        </el-col>
                    </el-row>
                </div>  
            </div>
        </div>
        <div class="right-container">
            <!-- 账户信息 -->
            <div class="user-container">
                <div class="user-info" @click="$router.push({'path':'/my'})">
                <div class="photo">
                    <img src="@/assets/images/head-photo.jpg" width="40px" alt="">
                </div>
                <div class="username">
                    <p>JavaCat技术团队
                    <img src="@/assets/images/level.png" width="36px">
                    </p>
                    <p style="font-size:12px;color:#999;">前端开发工程师</p>
                </div>
                </div>
                <div class="user-count">
                <div class="row">
                    <div class="count-btn">
                        32
                    </div>
                    <div>文章数量</div>
                </div>
                <div class="row">
                    <div class="count-btn">
                    843
                    </div>
                    <div>获赞数量</div>
                </div>
                <div class="row">
                    <div class="count-btn">
                    3232
                    </div>
                    <div>浏览次数</div>
                </div>
                </div>
                <div style="margin-top:5px;text-align:center;">
                </div>
                
                <el-button type="primary" size="small" style="width:260px"><i class="el-icon-edit"></i> 我要发贴</el-button>
            </div>
            <!-- 热门话题 -->
            <div class="record-container">
                <div class="cate-title">
                <div class="cate-title-text">
                    # 热门话题
                </div>
                </div>
                <div class="record-list">
                    <p class="hot-article" v-for="(item,index) in huatiList" style="font-size:13px;height:22px;" :key="index">
                        <span style="padding:2px;  background-image:-webkit-linear-gradient(0deg,#3ca5f6 0,#a86af9 100%);border-radius:3px;color:#fff;font-size:8px;margin-right:8px;">荐</span>
                        #<span>{{item.name}}</span>#
                        <span style="float:right;">{{index}}k</span>
                    </p>
                </div>
                <div class="more-list">
                    查看更多 &nbsp;>&nbsp;
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Club",
    data(){
        return {
            newsList:[
                {
                    photo:"/images/csdn.png",
                    username:"CSDN技术团队",
                    time:"12分钟前",
                    content:"今年六月份平薪来大学室友内推的公司，主要就是图不加班，任务少；今天来了说我们因为天天准点下班被公司其他研发部门眼红看不爽，被投诉，现在执行了末尾淘汰制(看平时下班时间---现在意思就是强制加班，任务饱和度)，我已经在准备简历了"
                }, {
                    photo:"/images/qq.png",
                    username:"腾讯QQ",
                    time:"12分钟前",
                    content:"有木有同学遇到过用svelte开发一个公共模块（比如菜单），build后另一个项目引入（该项目import了lodash），svelte的模块正常运行但是无法渲染，去掉lodash或者按需引入lodash才能正常渲染svelte模块",
                }, {
                    photo:"/images/baidu.png",
                    username:"百度",
                    time:"12分钟前",
                    content:"XDM，今年找工作这么难吗？我好多朋友找工作找好长时间都找不到。技术能力还可以，但是就是面试完之后没有消息了。有找工作的吗？大家都是什么情况~ ~ ~",
                }, {
                    photo:"/images/weibo.png",
                    username:"微博技术团队",
                    time:"12分钟前",
                    content:"昨天晚上看密室大逃脱大神版最新一期，哇，郭文韬解最后那个算术题题时候那邪魅一笑真是太迷人了，学霸的迷人之处真的让人无法自拔呀",
                }, {
                    photo:"/images/github.png",
                    username:"GitHub代码仓库",
                    time:"12分钟前",
                    content:"想做一个炒基，炒股，交流的项目，有没有人愿意聊聊的啊，把自己的一些东西分享出来，或者搬搬砖也可以，目的呢就是集结广大程序猿且热爱的股市的xdm，开源一个项目",
                }, {
                    photo:"/images/gitee.png",
                    username:"Gitee技术团队",
                    time:"12分钟前",
                    content:"杭州,三年,大专,10k,是不是有点少了~ ~ ~",
                },
            ],
            huatiList:[
                {
                    name:"上班摸鱼",
                },{
                    name:"迷惑BUG欣赏",
                },{
                    name:"马上撸代码",
                },{
                    name:"羊了个养",
                },{
                    name:"非正式面试",
                },{
                    name:"怎么看带996",
                },{
                    name:"羊了个养",
                },{
                    name:"非正式面试",
                },{
                    name:"怎么看带996",
                },{
                    name:"Hello Wrold !",
                },{
                    name:"迷惑BUG欣赏",
                },{
                    name:"马上撸代码",
                },
            ],
        }
    }
}
</script>
<style scoped>
.club-container{
    width:1140px;
    margin:0px auto;
}

.club-container .menu-container{
    float:left;
    width:180px;
    background:#fff;
}
.club-container .menu-container ul{
    padding:0px;
    list-style: none;
}
.club-container .menu-container li{
    width:160px;
    margin:0px 10px;
    min-height:36px;
    font-size:14px;
    text-indent:12px;
    line-height:36px;
    color:#333;
}

.club-container .menu-container li p{
    margin:0px;
    text-align: center;
}

.club-container .menu-container li:first-child{
    background:#eaf2ff!important;
    color:#1e80ff;
}

.club-container .news-container{
    width:830px;
    float:left;
}
.club-container .news-container .artilce-filter{
  line-height:40px;
  width:830px;
  height:40px;
  background:#fff;
  border-bottom:1px solid #f1f3f5;
}

.club-container .news-container .filter-menu{
  height:38px;
  margin:0px 12px;
  float:left;
  border-bottom:2px solid #fff;
}
.club-container .news-container .filter-menu:hover{
  border-color:#409eff;
}



.club-container .news{
    width:806px;
    background:#fff;
    border-radius: 3px;
    padding:12px;
    margin-bottom:10px;
}

.club-container .news .user-info{
    width:100%;
    height:50px;
}

.club-container .news .user-info .photo{
    width:34px;
    height:34px;
    border-radius: 50%;
    overflow: hidden;
    float:left;
    margin-top:3px;
}

.club-container .news .user-info .photo img{
    width:34px;
    height:34px;
}
.club-container .news .user-info .user-name{
    float:left;
    line-height:20px;
    margin-left:14px;
}

.club-container .news .user-info .user-name .username{
    font-size:14px;
    margin:0px;
}

.club-container .news .user-info .user-name .time{
    font-size:12px;
    margin:0px;
    color:#777;
}
.club-container .news .content{
    font-size:14px;
    color:#333;
    padding:0px 0px 6px 0px;
    padding-left:50px;
    line-height:28px;
    border-bottom:1px solid #f1f1f1
}
.club-container .news .img-content img{
    margin-right:8px;
}

.club-container .news .operate{
    width:100%;
    height:24px;
}

.club-container .right-container{
    position:fixed;
    top:165px;
    right:50%;
    margin-right:-570px;
    width:290px;
    float:right;
    /* background:#fff; */
}

.user-container{
  width:266px;
  padding:12px;
  height:160px;
  background:#fff;
  padding-bottom:24px;
  margin-bottom:15px;
}

.user-container p{
    margin:0px;
    line-height:20px;
}
.user-info{
  width:266px;
  height:60px;
  /* border-bottom:1px solid #f1f3f5; */
}
.user-info:hover{
  cursor:pointer;
}
.user-container .photo{
  width:40px;
  height:40px;
  background:#f1f1f1;
  border-radius: 50%;
  margin:5px auto;
  float:left;
  overflow:hidden;
  box-shadow: 0 0 4px rgba(0,0,0, 0.1);
}
.user-container .username{
  width:180px;
  height:40px;
  margin-left:10px;
  font-size:14px;
  color:#333;
  text-align: left;
  float:left;
}
.user-count{
  font-size:13px;
  height:70px;
  padding-top:0px;
}
.user-count .row{
  width:88.5px;
  text-align: center;
  float:left;
  height:34px;
  margin-top:6px;
  line-height: 30px;
  font-size:12px;
}

.record-container{
  width:266px;
  padding:12px;
  min-height:280px;
  background:#fff;
  margin-bottom:20px;
  position: relative;
  border-radius: 0px;

}
.cate-title{
  width:241px;
  height:50px;
  position:absolute;
  top:0px;
  left:0px;
  font-size:14px;
  border-bottom:1px solid #f1f3f5;
  color:#333;
  padding:0px 12px;
}
.cate-title-text{
  height:48px;
  float:left;
  padding:0px 3px;
  line-height:48px;
}
.record-list{
  margin-top:50px;
  width:241px;
}
.more-list{
    height:30px;
    border-top:1px solid #f1f1f1;
    line-height:40px;
    text-align: center;
    font-size:14px;
    color:#666;
}
.record-list .hot-article{
  width:241px;
  color:#666;
  height:30px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.record-list .hot-article:hover{
  color:#409eff;
  cursor:pointer;
}


/* 
sign in          // 登录页面
sign up          // 注册页面
index            // 首页
article          // 文章详情页面
personal center  // 个人中心页面
data management  // 数据管理页面
上班摸鱼页面

*/
.cate-container{
  width:1050px;
  padding-bottom:10px;
}
.cate-container::after{
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}

.cate-container span{
  display: block;
  float:left;
  padding:5px 10px;
  margin-right:12px;
  background:#fff;
  border-radius:12px;
  font-size:12px;
  color:#777;
  margin:4px 6px;
}
.cate-container span:hover{
  color:#409eff;
  cursor:pointer;
}
</style>