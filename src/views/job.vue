<template>
    <div class="job-container">
        <div class="top-container">
            <p>
                <span style="font-size:14px;">工作地点：</span>
                
                <el-link type="default" :underline="false" style="margin-left:22px;">全国</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">北京</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">上海</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">南京</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">武汉</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">成都</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">杭州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">苏州</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">广州</el-link>
            </p>
            <p>
                <span style="font-size:14px;">工作经验：</span>
                
                <el-link type="default" :underline="false" style="margin-left:22px;">学历要求</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">工作年限</el-link>
                <el-link type="default" :underline="false" style="margin-left:22px;">薪资要求</el-link>
            </p>
        </div>
        <div class="job-box-container">
            <div class="box-contaienr">
                <div class="box" v-for="(item,index) in 10" :key="index">
                    <div class="job-name">
                        <span class="">Java高级开发工程师【北京市·朝阳区】</span>
                        <span class="time">20:42发布</span>
                    </div>
                    <div class="job-price">
                        <span class="" style="color:#fe574a;">8K-10K</span>
                        <span class="" style="background:#f8f8f8;color:#666;font-size:12px;padding:4px 6px;margin:0px 12px;border-radius:4px;">经验不限</span>
                        <span class="" style="background:#f8f8f8;color:#666;font-size:12px;padding:4px 6px;border-radius:4px;">本科</span>
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
                        </div>
                    </div>
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
    height:80px;
    background:#fafafa;
    padding:6px;
    border:1px solid #eee;
}
.top-container p{
    margin:10px;
}
.job-box-container{
    width:1140px;
    margin-top:30px;
}
.box-contaienr{
    width:720px;
    float:left;
}
.box{
    width:720px;
    background:#fff;
    margin-bottom:12px;
    padding:15px 0px 0px 0px;
    border-radius:4px;
    position:relative;
    z-index:1;
    transition:all 0.3s;
}
.box:hover{
    top:-4px;
    z-index:2;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.05);
    cursor:pointer;
}
.job-name{
   padding:6px 12px;
}
.job-name .time{
    font-size:14px;
    color:#999;
    margin-left:12px;
}
.job-price{
    padding:6px 12px;
    height:30px;
    line-height:30px;
}

.job-jinneng{
    width:696px;
    height:40px;
    background:#f5fcfc;
    line-height: 40px;
    font-size:12px;
    color:#666;
    padding:0px 12px;
}
.job-jinneng span{
    margin:0px 5px;
}
</style>