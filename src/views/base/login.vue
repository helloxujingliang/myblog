<template>
  <div class="login-container">
    <div class="main-box">
      <div class="left-box">
        <div class="left-box-bg-1">
          <img src="~@/assets/images/login-bg-2.png">
        </div>
        <div class="left-box-bg-2">
          <img src="~@/assets/images/login-bg-2.png">
        </div>
        <div style="margin-top:100px;padding:0px 30px;height:30px;width:440px;line-height:30px;color:#fff;">
          <img src="~@/assets/images/logo.png" width="30px">
          <span style="position:relative;top:-8px;margin-left:12px;">HopetryCodebase 博客平台</span>
        </div>
        <div style="margin-top:20px;padding:0px 30px;height:30px;width:440px;line-height:30px;color:#fff;font-size:14px;text-indent:28px;">
         
          <span>HopetryCodebase 博客平台是一个包括 前端技术栈、后端技术栈、地理信息相关技术、产品开发的代码分享与博客记录平台，主要提供地图应用类产品的开发记录，截至目前为止已有100人注册并使用HopetryCodebase 博客平台，使用HopetryCodebase 博客平台将给您带来更加便利的体验，我们期待您的使用。</span>
        </div>
        <!-- <div class="other-login" style="margin-top:200px;background:none;">
          <div class="other-login-title"><img src="~@/assets/images/logo.png" width="30px">HopetryCodebase博客平台</div>
        </div> -->
      </div>
      <div class="rihgt-box">
        <p style="margin-bottom:54px;">
          <span style="font-size:20px;font-weight:bold;color:#777;">登 录</span>
          <span style="float:right;font-size:12px;margin-top:8px;">还没有账号？<el-link type="primary" :underline="false" @click="$router.push({path:'/register'})">注册账号</el-link></span>
        </p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm" size="small">
          <el-form-item  prop="email">
            <el-input v-model="ruleForm.email" type="text" placeholder="请输入邮箱" prefix-icon="el-icon-date">
            </el-input>
          </el-form-item>
       
          <el-form-item  prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>

          <el-form-item  prop="agree">
              <el-checkbox-group v-model="ruleForm.agree">
                <el-checkbox label="我已阅读并同意" name="agree"></el-checkbox>
                 <span style="position:relative;top:-5px;">
                   <el-link type="primary" :underline="false">《隐私条款》</el-link> 和
                    <el-link type="primary" :underline="false">《 使用条例》</el-link>
                  </span>
              </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="small" style="width:300px;margin:-top:12px;"  @click="submitForm('ruleForm')">立&nbsp;即&nbsp;登&nbsp;录</el-button> 
          </el-form-item>
        </el-form>
        <p style="margin-bottom:0px;line-height:15px;text-align:right;">
          <span style="font-size:12px;"><el-link type="primary" :underline="false">忘记密码</el-link></span>
        </p>
        <div class="other-login">
          <div class="other-login-title">其他方式登录</div>
          <div class="box">
            <img src="@/assets/images/qq.png" width="30px" height="30px" />
          </div>
          <div class="box">
            <img src="@/assets/images/csdn.png" width="30px" height="30px" />
          </div>
          <div class="box">
            <img src="@/assets/images/github.png" width="30px" height="30px" />
          </div>
          <div class="box">
            <img src="@/assets/images/weibo.png" width="30px" height="30px" />
          </div>
          <div class="box">
            <img src="@/assets/images/baidu.png" width="30px" height="30px" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name:"",
  data(){
    return {
      ruleForm:{
        agree:[],
      },
      rules: {
        email: [
            {required: true, message: '请输入邮箱号', trigger: 'blur'},
            {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式错误',trigger: 'blur'},
            // {validator:,trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur' },
          {pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/, message: '密码为数字，大小写字母，特殊符包含三种，长8-30位',trigger: 'blur'  },
          // 密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为8-30位，（判断的时候不区分大小写)
        ],
        agree: [
          { type: 'array', required: true, message: '请先阅读并同意使用', trigger: 'change' }
        ]
      },
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem("Token","1234546");
          this.$router.push({path:'/'});
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>
<style scoped>
.login-container{
  width:100vw;
  height:100vh;
}

.main-box{
  width: 900px;
  height: 500px;
  /* width:400px;
  height:500px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 20px 80px 0px rgb(0 0 0 / 30%);
  background:#fff;
}

.main-box .left-box{
  width:500px;
  height:500px;
  float:left;
  background:linear-gradient(0deg, #3a485a 0%, #607089 100%);
  position:relative; 
}

.left-box-bg-2{
  width:300px;
  height:300px;
  background:absolute;
  position:absolute;
  bottom:0px;
  right:0px;
}

.left-box-bg-1{
  width:300px;
  height:300px;
  background:absolute;
  position:absolute;
  top:0px;
  left:0px;
  transform: rotate(180deg);
}
.main-box .rihgt-box{
  width:300px;
  height:400px;
  padding:50px;
  padding-top:20px;
  float:left;
}

::v-deep .el-input__inner{
  border-radius:0px;
}

.other-login{
  width:300px;
  height:100px;
  border-top:1px solid #ddd;
  margin-top:16px;
  position:relative;
}

.other-login-title{
  width:100px;
  height:40px;
  background:#ffffff;
  color:#8c92a4;
  font-size:12px;
  position:absolute;
  left:100px;
  top:-20px;
  line-height:40px;
  text-align:center;
}

.other-login .box{
  margin-top:24px;
  width:30px;
  height:30px;
  margin:24px 12px;
  float:left;
  border-radius:50%;
}



</style>