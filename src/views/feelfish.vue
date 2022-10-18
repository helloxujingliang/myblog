<template>
    <div class="club-container">
        <!-- <div class="cate-container">
            <span style="background:#4093ff;color:#fff;">综合</span>
            <span>上班摸鱼</span>
            <span>吐槽一下</span>
            <span>今日问答</span>
            <span>招聘广场</span>
            <span>技术人生</span>
            <span>打工人日常</span>
        </div> -->

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
            <div class="write-news">
                <div class="textarea">
                    <el-input type="textarea" v-model="newsContent" placeholder="快分享新鲜事！告诉你一个小秘密，发布帖子是添加圈子和话题会被更多人发现" maxlength="1000" show-word-limit></el-input>
                </div>
                <div class="other">
                    <span class="button"><img src="/images/icon/圈子.png" width="18px" style="position:relative;top:5px;" alt=""> 圈子</span>
                    <span class="button"> <img src="/images/icon/表情.png" width="18px" style="position:relative;top:5px;" alt=""> 表情</span>
                    <span class="button"><img src="/images/icon/图片.png" width="18px" style="position:relative;top:5px;" alt="">  图片</span>
                    <span class="button"><img src="/images/icon/链接.png" width="18px" style="position:relative;top:5px;" alt=""> 链接</span>
                    <span class="button"><img src="/images/icon/话题.png" width="18px" style="position:relative;top:5px;" alt=""> 话题</span>
                    <el-button type="primary" size="mini" round style="float:right">
                        <i class="el-icon-s-promotion"></i>
                        发布
                    </el-button>
                </div>
            </div>
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
                        <p class="time">{{item.work}} · 发布于{{item.time}} <el-tag type="primary" size="mini">@{{item.classname}}</el-tag></p>
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
                        <el-col :span="8" style="font-size:12px;line-height:40px;text-align:center;color:#777;">
                            <img src="/images/icon/fenxiang.png" alt="" width="18px" style="position:relative;top:3px;">
                            分享
                        </el-col>
                        <el-col :span="8" style="font-size:12px;line-height:40px;text-align:center;color:#777;cursor:pointer;" >
                            <img @click="changeCommentVisible(index)" src="/images/icon/回复.png" alt="" width="18px" style="position:relative;top:2px;">
                            评论（{{item.commentcount}}）
                        </el-col>
                        <el-col :span="8" style="font-size:12px;line-height:40px;text-align:center;color:#777;">
                            <img src="/images/icon/点赞.png" alt="" width="18px" style="position:relative;top:3px;">
                            点赞（1{{item.good}}）
                        </el-col>
                    </el-row>
                </div>  
                <div class="comment" v-if="item.showComment">
                    <div class="comment-parent">
                        <div class="comment-user-info" v-for="(it,idx) in item.comments" :key="idx">
                            <div class="comment-user-photo">
                                <img :src="it.photo" width="40px" alt="">
                            </div>
                            <div class="comment-user-name">
                                <p class="comment-info">{{it.commentusername}} <span style="font-size:12px;color:#777;margin:0px 12px;">{{it.work}}</span>  <span style="font-size:12px;color:#777;">{{it.time}}</span></p>
                                <p class="comment-content">{{it.comment}}</p>
                                <p class="comment-operate"><span style="margin-right:12px;"><img src="/images/icon/点赞.png" alt="" width="18px" style="position:relative;top:3px;">点赞</span>  <span><img src="/images/icon/回复.png" alt="" width="18px" style="position:relative;top:2px;">回复</span></p>
                                <div>
                                    <div class="comment-child" v-show="it.replyList.length>0">
                                        <div class="child-comment-user-info" v-for="(reply,i) in it.replyList" :key="i">
                                            <div class="child-comment-user-photo">
                                                <img :src="reply.photo" width="40px" alt="">
                                            </div>
                                            <div class="child-comment-user-name">
                                                <p class="child-comment-info">{{reply.replyusername}} <span style="font-size:12px;color:#777;margin:0px 12px;">{{reply.work}}</span>  <span style="font-size:12px;color:#777;">{{reply.time}}</span></p>
                                                <p class="child-comment-content">{{reply.reply}}</p>
                                                <p class="comment-operate"><span style="margin-right:12px;"><img src="/images/icon/点赞.png" alt="" width="18px" style="position:relative;top:3px;">点赞</span>  <span><img src="/images/icon/回复.png" alt="" width="18px" style="position:relative;top:2px;">回复</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="morecomment" >
                        <el-link type="default" :underline="false">查看全部34条评论<i class="el-icon-arrow-right"></i></el-link>
                    </div>
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
            <!-- 精选摸鱼 -->
              <div class="record-container">
                <div class="cate-title">
                <div class="cate-title-text">
                    <img src="/images/icon/fish.png" width="20px" style="position:relative;top:5px;" alt="">&nbsp;精选摸鱼
                </div>
                </div>
                <div class="record-list">
                    <div> 
                        <div style="font-size:14px;color:#333;"> 
                            <p style="width:262px;margin-bottom:6px;">【上班摸鱼】今年六月份平薪来大学室友内推的公司，主要就是图不加班，任</p>
                            <p style="font-size:12px;color:#777;margin:0px;"><span>43赞</span>&nbsp;·&nbsp;<span>12评论</span></p>
                        </div>
                        <div style="font-size:14px;color:#333;"> 
                            <p style="width:262px;margin-bottom:6px;">有木有同学遇到过用svelte开发一个公共模块（比如菜单）d后另</p>
                            <p style="font-size:12px;color:#777;margin:0px;"><span>23赞</span>&nbsp;·&nbsp;<span>3评论</span></p>
                        </div>
                        <div style="font-size:14px;color:#333;"> 
                            <p style="width:262px;margin-bottom:6px;">XDM，今年找工作这么难吗？我好多朋友找工作找好长时间不到。</p>
                            <p style="font-size:12px;color:#777;margin:0px;"><span>12赞</span>&nbsp;·&nbsp;<span>0评论</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 热门话题 -->
            <div class="record-container">
                <div class="cate-title">
                <div class="cate-title-text">
                   <img src="/images/icon/huati.png" width="20px" style="position:relative;top:5px;" alt="">&nbsp;热门话题
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
            newsContent:null,
            newsList:[
                {
                    showComment:false,
                    photo:"/images/baidu.png",
                    username:"百年孤独Html",
                    work:"前端开发工程师",
                    time:"12分钟前",
                    classid:1,
                    classname:"上班摸鱼",
                    good:"109",
                    commentcount:23,
                    images:[
                        
                    ],
                    content:"今年六月份平薪来大学室友内推的公司，主要就是图不加班，任务少；今天来了说我们因为天天准点下班被公司其他研发部门眼红看不爽，被投诉，现在执行了末尾淘汰制(看平时下班时间---现在意思就是强制加班，任务饱和度)，我已经在准备简历了",
                    tags:[
                        {
                            id:1,
                            name:"上班摸鱼"
                        }, {
                            id:1,
                            name:"吐槽大会"
                        }
                    ],
                    comments:[
                       {
                            commentusername:"Sun YaNan",
                            photo:"/images/photo/sunyanan.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[]
                        },{
                            commentusername:"Liu Hui",
                            photo:"/images/photo/liuhui.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"Cesium框架添加的Entity实体如何贴在S3M倾斜摄影上",
                            replyList:[
                                {
                                    replyusername:"Tian FuWei",
                                    photo:"/images/photo/tianfuwei.png",
                                    work:"Web前端开发",
                                    time:"2022-10-18 14:40",
                                    reply:"可以在entity属性上添加clamToS3M:true属性"
                                },{
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:42",
                                    reply:"设置了 没有效果。。。"
                                },{
                                    replyusername:"百年孤独Html",
                                    photo:"/images/photo/pangchaoli.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:44",
                                    reply:"设置一下classHisgiht : Cesium.hieght()试试"
                                },{
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:50",
                                    reply:"可以，有效果"
                                },
                            ]
                        },{
                            commentusername:"Shi WenBin",
                            photo:"/images/photo/shiwenbin.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[
                                {
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"Web前端开发",
                                    time:"2022-10-18 14:40",
                                    reply:"可以在entity属性上添加clamToS3M:true属性"
                                },{
                                    replyusername:"Shi WenBin",
                                    photo:"/images/photo/shiwenbin.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:42",
                                    reply:"设置了 没有效果。。。"
                                }
                            ]
                        }, {
                            commentusername:"Pang ChaoLi",
                            photo:"/images/photo/pangchaoli.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[]
                        },
                    ],

                },  {
                    showComment:false,
                    photo:"/images/csdn.png",
                    username:"CSDN技术团队",
                    work:"前端开发工程师",
                    time:"12分钟前",
                    classid:1,
                    classname:"上班摸鱼",
                    good:"109",
                    commentcount:23,
                    images:[
                        
                    ],
                    content:"有木有同学遇到过用svelte开发一个公共模块（比如菜单），build后另一个项目引入（该项目import了lodash），svelte的模块正常运行但是无法渲染，去掉lodash或者按需引入lodash才能正常渲染svelte模块",
                    tags:[
                        {
                            id:1,
                            name:"上班摸鱼"
                        }, {
                            id:1,
                            name:"吐槽大会"
                        }
                    ],
                    comments:[
                       {
                            commentusername:"Sun YaNan",
                            photo:"/images/photo/sunyanan.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[]
                        },{
                            commentusername:"Liu Hui",
                            photo:"/images/photo/liuhui.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"Cesium框架添加的Entity实体如何贴在S3M倾斜摄影上",
                            replyList:[
                                {
                                    replyusername:"Tian FuWei",
                                    photo:"/images/photo/tianfuwei.png",
                                    work:"Web前端开发",
                                    time:"2022-10-18 14:40",
                                    reply:"可以在entity属性上添加clamToS3M:true属性"
                                },{
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:42",
                                    reply:"设置了 没有效果。。。"
                                },{
                                    replyusername:"百年孤独Html",
                                    photo:"/images/photo/pangchaoli.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:44",
                                    reply:"设置一下classHisgiht : Cesium.hieght()试试"
                                },{
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:50",
                                    reply:"可以，有效果"
                                },
                            ]
                        },{
                            commentusername:"Shi WenBin",
                            photo:"/images/photo/shiwenbin.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[
                                {
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"Web前端开发",
                                    time:"2022-10-18 14:40",
                                    reply:"可以在entity属性上添加clamToS3M:true属性"
                                },{
                                    replyusername:"Shi WenBin",
                                    photo:"/images/photo/shiwenbin.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:42",
                                    reply:"设置了 没有效果。。。"
                                }
                            ]
                        }, {
                            commentusername:"Pang ChaoLi",
                            photo:"/images/photo/pangchaoli.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[]
                        },
                    ],

                },  {
                    showComment:true,
                    photo:"/images/qq.png",
                    username:"JavaCat技术团队",
                    work:"全干攻城狮",
                    time:"12分钟前",
                    classid:1,
                    classname:"上班摸鱼",
                    good:"109",
                    commentcount:23,
                    images:[
                        
                    ],
                    content:"XDM，今年找工作这么难吗？我好多朋友找工作找好长时间都找不到。技术能力还可以，但是就是面试完之后没有消息了。有找工作的吗？大家都是什么情况~ ~ ~",
                    tags:[
                        {
                            id:1,
                            name:"上班摸鱼"
                        }, {
                            id:1,
                            name:"吐槽大会"
                        }
                    ],
                    comments:[
                       {
                            commentusername:"Sun YaNan",
                            photo:"/images/photo/sunyanan.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[]
                        },{
                            commentusername:"Liu Hui",
                            photo:"/images/photo/liuhui.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"Cesium框架添加的Entity实体如何贴在S3M倾斜摄影上",
                            replyList:[
                                {
                                    replyusername:"Tian FuWei",
                                    photo:"/images/photo/tianfuwei.png",
                                    work:"Web前端开发",
                                    time:"2022-10-18 14:40",
                                    reply:"可以在entity属性上添加clamToS3M:true属性"
                                },{
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:42",
                                    reply:"设置了 没有效果。。。"
                                },{
                                    replyusername:"百年孤独Html",
                                    photo:"/images/photo/pangchaoli.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:44",
                                    reply:"设置一下classHisgiht : Cesium.hieght()试试"
                                },{
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:50",
                                    reply:"可以，有效果"
                                },
                            ]
                        },{
                            commentusername:"Shi WenBin",
                            photo:"/images/photo/shiwenbin.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[
                                {
                                    replyusername:"Liu Hui",
                                    photo:"/images/photo/liuhui.png",
                                    work:"Web前端开发",
                                    time:"2022-10-18 14:40",
                                    reply:"可以在entity属性上添加clamToS3M:true属性"
                                },{
                                    replyusername:"Shi WenBin",
                                    photo:"/images/photo/shiwenbin.png",
                                    work:"前端开发工程师",
                                    time:"2022-10-18 14:42",
                                    reply:"设置了 没有效果。。。"
                                }
                            ]
                        }, {
                            commentusername:"Pang ChaoLi",
                            photo:"/images/photo/pangchaoli.png",
                            work:"前端开发工程师",
                            time:"2022-10-18 14:32",
                            comment:"polygon实体如何贴在倾斜摄影模型上",
                            replyList:[]
                        },
                    ],

                }, 
                //  {
                //     photo:"/images/qq.png",
                //     username:"腾讯QQ",
                //     time:"12分钟前",
                //     content:"",
                // }, {
                //     photo:"/images/baidu.png",
                //     username:"百度",
                //     time:"12分钟前",
                //     content:"",
                // }, {
                //     photo:"/images/weibo.png",
                //     username:"微博技术团队",
                //     time:"12分钟前",
                //     content:"昨天晚上看密室大逃脱大神版最新一期，哇，郭文韬解最后那个算术题题时候那邪魅一笑真是太迷人了，学霸的迷人之处真的让人无法自拔呀",
                // }, {
                //     photo:"/images/github.png",
                //     username:"GitHub代码仓库",
                //     time:"12分钟前",
                //     content:"想做一个炒基，炒股，交流的项目，有没有人愿意聊聊的啊，把自己的一些东西分享出来，或者搬搬砖也可以，目的呢就是集结广大程序猿且热爱的股市的xdm，开源一个项目",
                // }, {
                //     photo:"/images/gitee.png",
                //     username:"Gitee技术团队",
                //     time:"12分钟前",
                //     content:"杭州,三年,大专,10k,是不是有点少了~ ~ ~",
                // },
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
                },
                // {
                //     name:"羊了个养",
                // },{
                //     name:"非正式面试",
                // },{
                //     name:"怎么看带996",
                // },{
                //     name:"Hello Wrold !",
                // },{
                //     name:"迷惑BUG欣赏",
                // },{
                //     name:"马上撸代码",
                // },
            ],
        
        }
    },
    methods:{
        changeCommentVisible(index){
            this.newsList[index].showComment = !this.newsList[index].showComment
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
.club-container .write-news{
    width:800px;
    height: 168px;
    background:#fff;
    margin-bottom:15px;
    border-radius:5px;
    padding:15px;
}
.club-container .write-news .textarea{
    width:800px;
    height:120px;
    background:#f1f3f5;
    border-radius: 5px;
    
}
.club-container .write-news  .other{
    width:800px;
    height:20px;
    padding-top:15px;
}
.club-container .write-news  .other .button{
    margin-right:18px;
    font-size:14px;
    color:#666;
    padding:3px 6px;
    border-radius: 5px;
}
.club-container .write-news  .other .button:hover{
    background:#f1f3f5;
    cursor:pointer;
}
::v-deep .el-textarea__inner{
    background:#f1f3f5;
    border:none;
    font-size:15px;
    font-family: "微软雅黑";
    height:120px;
    max-height:120px;
}
.club-container .news-container .artilce-filter{
  line-height:50px;
  width:830px;
  height:50px;
  background:#fff;
  border-bottom:1px solid #f1f3f5;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.club-container .news-container .filter-menu{
  height:48px;
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
    border-radius: 4px;
    padding:12px;
    padding-bottom:0px;
    margin-bottom:12px;
}

.club-container .news:first-child{
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}

.club-container .news .user-info{
    width:100%;
    height:50px;

}

.club-container .news .user-info .photo{
    width:40px;
    height:40px;
    border-radius: 50%;
    overflow: hidden;
    float:left;
}

.club-container .news .user-info .photo img{
    width:40px;
    height:40px;
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
    height:40px;
    /* background:red; */
}

.club-container .news .comment{
    width:760px;
    background:#fff;
    padding-left:30px;
    padding-top:15px;
    border-top:1px solid #f1f3f5;
    /* margin-top:15px; */
}
.club-container .news .morecomment{
    width:100%;
    text-align: center;
    height:40px;
    line-height:40px;
}
.club-container .news .comment::after{  
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.comment-parent{
    width:100%;
}
.comment-parent::after{  
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.comment-parent .comment-user-info{
    width:100%;
    padding-bottom:15px;
    padding:15px 0px;
    border-bottom:1px solid #f1f3f5;
    /* height:400px; */
}

.comment-parent .comment-user-info::after{  
  content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.comment-parent .comment-user-info .comment-user-photo{
    width:30px;
    height:30px;
    border-radius: 50%;
    float:left;
    margin-top:5px;
    /* margin-left:40px; */
    overflow: hidden;
}
.comment-parent .comment-user-info .comment-user-photo img{
    width:30px;
    height:30px;
}
.comment-parent .comment-user-info .comment-user-name{
    float:left;
    margin-left:15px;
    font-size:14px;
    line-height:20px;
}
.comment-parent .comment-user-info .comment-user-name::after{
content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.comment-parent .comment-user-info .comment-user-name .comment-info{
    line-height:30px;
}
.comment-parent .comment-user-info .comment-user-name .comment-content{
    font-size:14px;
    margin-top:0px;
}
.comment-operate{
    font-size:12px;
    color:#777;
}
.comment-parent .comment-user-info .comment-user-name p{
    margin:0px;
    line-height:20px;
}
.comment-child{
    width:690px;
    background:#fafafa;
    padding:12px;
    margin-top:12px;
    border-radius: 8px;
}
.comment-child::after{
    content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;

}
.comment-child .child-comment-user-info{
    width:100%;
}
.comment-child .child-comment-user-info::after{
    content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;

}
.comment-child .child-comment-user-info .child-comment-user-photo{
    width:30px;
    height:30px;
    border-radius: 50%;
    float:left;
    margin-top:5px;
    overflow: hidden;
}
.comment-child .child-comment-user-info .child-comment-user-photo img{
    width:30px;
    height:30px;
}
.comment-child .child-comment-user-info .child-comment-user-name{
    float:left;
    height:80px;
    margin-left:15px;
    font-size:14px;
    line-height:20px;
}
.comment-child .child-comment-user-info .child-comment-user-name .child-comment-info{
    line-height:30px;
}
.comment-child .child-comment-user-info .child-comment-user-name .child-comment-content{
    font-size:14px;
    margin-top:0px;
}
.comment-child .child-comment-user-info .child-comment-user-name p{
    margin:0px;
    line-height:20px;
}
.club-container .right-container{
    position:fixed;
    top:122px;
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
  min-height:220px;
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