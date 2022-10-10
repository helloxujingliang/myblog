<template>
    <div class="job-container">
        <div class="top-container">
            <p>
                <span style="font-size:12px;">工作地点：</span>
                
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">全国</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">北京</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">上海</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">南京</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">武汉</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">成都</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">杭州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">苏州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">广州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">全国</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">北京</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">上海</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">南京</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">武汉</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">成都</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">杭州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">苏州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">广州</el-link>
            </p>
            <p>
                <span style="font-size:12px;">工作经验：</span>
                
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">学历要求</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">工作年限</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;font-size:12px;position:relative;top:-2px">薪资要求</el-link>
            </p>
        </div>
        <div class="job-box-container">
            <div class="box-contaienr">
                <div class="box" v-for="(item,index) in jobList" :key="index">
                    <div class="job-name">
                        <span class="">{{item.name}}</span>
                        <span class="time">20:42发布</span>
                    </div>
                    <div class="job-price">
                        <span class="" style="color:#fe574a;">{{item.salary}}</span>
                        <span class="" style="background:#f8f8f8;color:#666;font-size:12px;padding:4px 6px;margin:0px 12px;border-radius:4px;">经验不限</span>
                        <span class="" style="background:#f8f8f8;color:#666;font-size:12px;padding:4px 6px;border-radius:4px;">本科</span>
                        <div class="user-info">
                            <div class="photo">
                                <img :src="item.image" alt="" width="30px" height="30px">
                            </div>
                            <div class="user-name">
                                <p style="color:#666;">{{item.user}} <i class="el-icon-s-comment"></i></p>
                               
                                <p>慧创信息科技 <span>|</span> 地理信息 <span>|</span> 200人-500人</p>
                            </div>
                        </div>
                    </div>
                    <div class="job-jinneng">
                        <div style="float:left;">
                            <span>java</span>
                            <span>springboot</span>
                            <span>mybatis</span>
                            <span>spring</span>
                        </div>
                        <div style="float:right;">
                            <span>五险一金</span>
                            <span>加班补助</span>
                            <span>节日福利</span>
                            <span>员工旅游</span>
                            <span>零食补贴</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="job-right">
                <div class="fabu">
                    <div class="inner">
                        <div class="fabu-inner">
                            <el-input size="small" prefix-icon="el-icon-phone" placeholder="邮箱地址"></el-input>
                            <el-input  size="small" placeholder="验证码" style="margin:18px 0px;"></el-input>
                            <el-button type="primary" size="small" style="width:200px;">发布职位 &nbsp; /&nbsp; 投递简历</el-button>
                        </div>
                    </div>
                </div>
                <div class="advert">
                    <img src="https://img.bosszhipin.com/static/file/2022/wf8r5vlj1y1653961013785.png" alt="">
                </div>
                <div class="advert">
                    <img src="https://img.bosszhipin.com/static/file/2022/0yvtgtkdjk1653961014037.png" alt="">
                </div>
                <div class="advert">
                    <img src="https://img.bosszhipin.com/static/file/2022/ne3elze9ld1653961014120.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Job",
    data(){
        return {
            jobList:[
                {
                    name:"Web高级前端开发工程师【北京市·朝阳区】",
                    image:"/images/baidu.png",
                    salary:"8K-12K",
                    user:"百度科技",
                },{
                    name:"Java高级开发工程师【北京市·海淀区】",
                    image:"/images/csdn.png",
                    salary:"8K-10K",
                    user:"新浪微博",
                },{
                    name:"C#高级开发工程师【广州市·白云区】",
                    image:"/images/weibo.png",
                    salary:"6K-7K",
                    user:"CSDN博客园",
                },{
                    name:"高级前端开发工程师【北京市·朝阳区】",
                    image:"/images/gitee.png",
                    salary:"5K-7K",
                    user:"Gitee码云",
                },{
                    name:"Web高级前端开发工程师【北京市·朝阳区】",
                    image:"/images/baidu.png",
                    salary:"8K-12K",
                    user:"百度科技",
                },{
                    name:"Java高级开发工程师【北京市·海淀区】",
                    image:"/images/csdn.png",
                    salary:"8K-10K",
                    user:"新浪微博",
                },{
                    name:"C#高级开发工程师【广州市·白云区】",
                    image:"/images/weibo.png",
                    salary:"6K-7K",
                    user:"CSDN博客园",
                },{
                    name:"高级前端开发工程师【北京市·朝阳区】",
                    image:"/images/gitee.png",
                    salary:"5K-7K",
                    user:"Gitee码云",
                }
            ]
        }
    }

}
</script>
<style scoped>
.job-container{
    width:1140px;
    margin:0px auto;
}
.top-container{
    width:1140px;
    /* height:60px; */
    /* background:#fafafa; */
    padding:0px;
    /* border:1px solid #eee; */
    font-size:12px;
}
.top-container p{
    margin:10px;
    font-size:12px;
    line-height:24px;
}
.job-box-container{
    width:1140px;
    margin-top:15px;
}
.box-contaienr{
    width:820px;
    float:left;
}
.job-right{
    width:260px;
    height:400px;
    float:right;
}
.job-right .fabu{
    width:260px;
    height:240px;
    margin-bottom:20px;
    border-radius: 10px;
    padding-top:40px;
    background:url(https://img.bosszhipin.com/static/file/2022/myz8vq8tfh1655797191987.png) 16px 14px/auto 50px no-repeat,linear-gradient(180deg,#71b4f7,#91c1f1) hsla(0,0%,100%,.21);
}   
.job-right .fabu .inner{
    width:260px;
    height:240px;
    border-radius: 10px;
    background:linear-gradient(180deg,rgba(54,202,202,0),rgba(255,255,255,0.7));
}
.job-right .fabu .fabu-inner{
    width:200px;
    height:180px;
    margin:0px auto;
    padding:25px 15px;
    border-radius:12px;
    background:linear-gradient(180deg,rgba(245,252,252,.8),#fcfbfa);
}
.job-right .advert{
    width:260px;
    height:150px;
    margin-bottom:15px;
}
.job-right .advert img{
    width:260px;
    border-radius:4px;
}
.box{
    width:855px;
    background:#fff;
    margin-bottom:15px;
    padding:15px 0px 0px 0px;
    border-radius:4px;
    position:relative;
    top:0px;
    z-index:1;
    transition:all 0.3s;
}
.box:hover{
    top:-3px;
    z-index:2;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.05);
    cursor:pointer;
}
.job-name{
    font-size:14px;
   padding:6px 12px;
   color:#409eff;
}
.job-name .time{
    font-size:12px;
    color:#999;
    margin-left:12px;
}
.job-price{
    padding:6px 12px;
    height:30px;
    line-height:30px;
}

.user-info{
    float:right;
    height:30px;
    width:280px;
    position:relative;
    top:-28px;
}
.user-info .photo{
    width:30px;
    margin:8px 0px;
    height:40px;
    float:left;
}
.user-info .user-name{
    float:left;
    height:40px;
    padding-left:12px;
    line-height:20px;
    font-size:12px;
    color:#999;
}
.user-info .user-name p{
    margin:2px 0px;
}
.job-jinneng{
    width:831px;
    height:40px;
    background:#f5fcfc;
    line-height: 40px;
    font-size:12px;
    color:#999;
    padding:0px 12px;
}
.job-jinneng span{
    margin:0px 5px;
}

::v-deep .el-input__inner{
    border:0px;
    border-radius:6px;
    font-size:12px;
}
</style>