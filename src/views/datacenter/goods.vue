<template>
    <div class="container">
        <div class="title">
            <span style="font-size:14px;" class="backtoShops" @click="$router.push('/datacenter/shops')">
                <i class="el-icon-arrow-left"></i>
                返回
            </span>
            <span style="margin:0px 15px;font-size:14px;color:#f1f1f1;">|</span>
            兑换详情
        </div>
        <div class="form">
            <p class="form-title">收获地址</p>
            <div style="margin-left:20px;">
                <el-form ref="form" :model="form" label-width="100px" size="small" label-position="right">
                <el-form-item label="收货人姓名:">
                    <el-input v-model="form.name" maxlength="15"  placeholder="请输入收货人姓名"></el-input>
                </el-form-item>

                <el-form-item label="联系电话:">
                    <el-input v-model="form.name" maxlength="15" placeholder="请输入11位联系电话"></el-input>
                </el-form-item>

                <el-form-item label="收获地址:">
                    <el-input v-model="form.name" maxlength="15"  placeholder="请输入详细收获地址"></el-input>
                </el-form-item>

                <el-form-item label="备注信息:">
                    <el-input v-model="form.name" type="textarea" maxlength="15" placeholder="请输入备注信息"></el-input>
                </el-form-item>


                <!-- <el-form-item label="个人介绍" maxlength="15" show-word-limit>
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item> -->
            </el-form>
            </div>
            <p class="form-title">物品信息</p>
            <div style="margin-left:20px;">
                <el-descriptions title="" direction="vertical" :column="6" border size="mini">
                    <el-descriptions-item label="兑换物品">
                        <img src="/images/shpos/goods1.jpg" alt="" width="80px" style="float:left;">
                        <p style="line-height:78px;">AOKKA咖啡豆（深度烘焙）</p>
                    </el-descriptions-item>
                    <el-descriptions-item label="数量">1</el-descriptions-item>
                    <el-descriptions-item label="单价" :span="2">540,000咖啡豆</el-descriptions-item>
                    <el-descriptions-item label="总计" :span="2"><span style="color:#108eff;">540,000咖啡豆</span></el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="info">
                <p style="font-size:14px;color:#109eff;"><i class="el-icon-question">&nbsp;<span style="font-size:14px;">兑换须知</span></i></p>
                <p>1、虚拟商品兑换后不予退回，会在5个工作日内通过站内信方式发送兑换码，请注意查看【系统消息】</p>
                <p>2、实物奖品将在15个工作日内寄出，具体物流消息可以关注微信小程序顺丰速运输入手机号查看，请耐心等待并注意查收</p>
                <p>3、兑换成功后可在“成长福利-我的收获”查看</p>
            </div>
            <div style="height:40px;padding:20px 0px;text-align:right;">
                <el-button type="primary" size="large" round>立即兑换</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Level",
    data(){
        return {
            form:{},
              goods: [{
                name:"陶瓷马克杯",
                image:"/images/shpos/goods5.jpg",
                price:33.5,
                count:7,
            }]
        }
    }
}
</script>
<style scoped>
.container{
    width:724px;
    padding:20px;
    background:#fff;
}
.title{
    width:724px;
    padding-bottom:20px;
    border-bottom:1px solid #f1f3f5;
    font-size:14px;
}
.backtoShops:hover{
    color:#108eff;
    cursor: pointer;
}
.form-title{
    height:50px;
    line-height:50px;
    border-bottom:1px solid #f1f3f5;
    margin-bottom:15px;
}

::v-deep .el-form-item__label{
    color:#4e5969;
}

::v-deep .el-input__inner{
    background:#f7f8fa;
    border:0px;
    color:#606266;
    width:500px;
}
::v-deep .el-textarea__inner{
     background:#f7f8fa;
    border:0px;
    color:#606266;
    width:500px;

}

.info{
    width:684px;
    margin-top:20px;
    padding:20px;
    font-size:12px;
    line-height:20px;
    border-radius: 6px;
    background:#e8f3ff;
    color:#818181;
    line-height:24px;
}
::v-deep .el-descriptions-item__cell,.el-descriptions-item__label,.is-bordered-label {
    border:0px;
}
</style>