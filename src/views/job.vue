<template>
    <div class="job-container">
        <div class="top-container">

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
    height:280px;
    
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
    padding:12px 0px 0px 0px;
    
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