<template>
    <div class="container">
        <div class="title">
            个人资料
        </div>
          
        <div style="width:100%;height:140px;margin-top:50px;">
            <div class="image">
                <img src="/images/photo/liuhui.png" alt="">
            </div>
            <div style="float:left;margin-left:30px;padding-top:10px;">
                <p style="text-align:left;">我的头像</p>
                <p style="font-size:12px;color:#999;text-align:left;">支持 jpg、png、jpeg 格式大小 5M 以内的图片</p>
            </div>
        </div>

        <el-form ref="form" :model="form" label-width="100px" size="mini" label-position="left">
            <el-form-item label="用户名">
                <el-input v-model="form.name" maxlength="15" show-word-limit></el-input>
            </el-form-item>

            <el-form-item label="出生日期" prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>

            <el-form-item label="性别" prop="region">
                <el-select v-model="form.region" placeholder="请选择性别">
                <el-option label="男" value="shanghai"></el-option>
                <el-option label="女" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="职位">
                <el-input v-model="form.name" maxlength="15" show-word-limit></el-input>
            </el-form-item>

            <el-form-item label="公司">
                <el-input v-model="form.componey" maxlength="30" show-word-limit></el-input>
            </el-form-item>

            <el-form-item label="职位">
                <el-input v-model="form.work" maxlength="15" show-word-limit></el-input>
            </el-form-item>

            <el-form-item label="个人介绍" maxlength="15" show-word-limit>
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            
            <el-button type="primary" size="mini" @click="onSubmit" style="margin-left:110px;">保存修改</el-button>
        </el-form>
         

    </div>
</template>
<script>
export default {
    name:"Personal",
    data(){
        return {
            form:{
                name:"吃饭睡觉打代码",
                work:"前端开发工程师",
                desc:"Ctrl C V的好，下班下的早"
            }
        }
    },
    created(){

    },
    methods:{

    }
}
</script>
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
::v-deep .el-form-item{
    padding-bottom:15px;
    /* border-bottom:1px solid #f1f3f5; */
    padding-right:20px;
    padding-left:12px;
}
::v-deep .el-input__inner{
    background:#fafafa;
    border-radius: 25px;
}
.image{
    width:90px;
    height:90px;
    border-radius: 50%;
    margin:0px auto;
    float:left;
    margin-left:0px;
}
.image img{
    width:90px;
    height:90px;
}
</style>