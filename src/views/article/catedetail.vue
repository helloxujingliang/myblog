<template>
<div class="page-container">
    <div class="top-container">
        <div class="cate-info">
            <div>
                <div class="cate-image">
                    <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/0cfb4955c418e67c273a.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp" width="100px" height="100px" alt="">
                </div>
                <div class="cate-name">
                    <p>
                        <span style="font-size:18px;font-weight:bold;">Angular</span>
                        <el-button type="success" size="mini" style="margin-left:20px;" >已关注</el-button></p>
                    <p class="cate-count">728人关注 · 83479篇文章</p>
                    <p class="cate-desc">AngularJS 是一个 JavaScript 框架。它是一个以 JavaScript 编写的库。AngularJS 是以一个 JavaScript 文件形式发布的,可通过 script 标签添加到网页中:我们建议把脚本放在</p>
                </div>
            </div>
        </div>
        
    </div>
    <div class="container">
        <div class="filter-container">
            <div style="width:200px;float:left;">
                <el-link type="primary" style="margin-right:20px;font-size:16px;" :underline="false">热门</el-link>
                <el-link type="default" style="margin-right:20px;font-size:16px;" :underline="false">最新</el-link>
                <el-link type="default" style="margin-right:20px;font-size:16px;" :underline="false">最热</el-link>
            </div>
            <div style="width:240px;float:right;">
                <el-input placeholder="搜索专栏文章..." size="mini" class="input-with-select">
                    <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
        <div class="data-container">
            <List></List>
        </div>
    </div>
</div>

</template>
<script>
import List from "./catelist.vue"
export default {
    components:{
        List,
    },
    name:"",
}
</script>
<style scoped>
.page-container{
    width:100%;
}
.top-container{
    width:100%;
    background:#f8f9fa;
    margin:0px auto;
}
.container{
    width:920px;
    margin:0px auto;
}
.cate-info{
    width:920px;
    height:140px;
    padding:20px 0px;
    margin:0px auto;
    /* background:#fff; */
    /* text-align:center; */
}
.cate-image{
    width:100px;
    padding:15px;
    height:100%;
    float:left;
    background:rgba(255,255,255,0.9)
}
.cate-name{
    width:750px;
    min-height: 50px;
    padding-top:5px;
    float:left;
    margin-left:40px;
    color:#666;
}
.cate-count{
    font-size:14px;
    color:#999;
    margin:12px 0px;
}
.cate-desc{
    font-size:14px;
    color:#71777c;
    line-height:24px;
}
.filter-container{
    width:910px;
    height:50px;
    line-height:50px;
    padding-left:10px;
}
::v-deep .el-input__inner{
    border-radius:0px;
}

::v-deep .el-button{
    border-radius: 0px;
}
</style>