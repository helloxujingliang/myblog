<template>
    <div class="container">
        <div class="title">
            账号设置
        </div>
        <div class="item">
            <span class="item-title">邮箱</span>
            <span class="item-value">3225043@qq.com</span>
            <span class="item-set">
                <el-link type="primary" :underline="false">绑定</el-link>
            </span>
        </div>
        <div class="item">
            <span class="item-title">微信</span>
            <span class="item-value">Q6S53Z</span>
            <span class="item-set">
                <el-link type="primary" :underline="false">绑定</el-link>
            </span>
        </div>

        <div class="item">
            <span class="item-title">GtiHub</span>
            <span class="item-value">未绑定</span>
            <span class="item-set">
                <el-link type="primary" :underline="false">绑定</el-link>
            </span>
        </div>

         <div class="item">
            <span class="item-title">CSDN </span>
            <span class="item-value">吃饭睡觉打代码</span>
            <span class="item-set">
                <el-link type="primary" :underline="false">绑定</el-link>
            </span>
        </div>

        <div class="item">
            <span class="item-title">密码</span>
            <!-- <span class="item-value">3225043@qq.com</span> -->
            <span class="item-set">
                <el-link type="primary" :underline="false">重置</el-link>
            </span>
        </div>

        <div class="item">
            <span class="item-title">注销账号</span>
            <!-- <span class="item-value">3225043@qq.com</span> -->
            <span class="item-set">
                <el-link type="primary" :underline="false">注销</el-link>
            </span>
        </div>
    </div>
</template>
<style scoped>
.container{
    width:724px;
    min-height: calc( 100vh - 140px);
    padding:20px;
    background:#fff;
}
.title{
    width:724px;
    padding-bottom:20px;
    border-bottom:1px solid #f1f3f5;
}
.item{
    width:100%;
    height:40px;
    padding:12px 0px;
    border-bottom:1px solid #f1f3f5;
    line-height:40px;
    font-size:14px;
}
.item-title{
    width:60px;
    float:left;
}
.item-value{
    font-size:14px;
    margin-left:30px;
    color:#909090;
}
.item-set{
    float:right;

}
</style>