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
          <img src="/images/logo.png" width="40px" style="position:relative;z-index:9999;">
          <span style="position:relative;top:-8px;margin-left:12px;">JavaCat 博客平台</span>
        </div>
        <div style="margin-top:20px;padding:0px 30px;height:30px;width:440px;line-height:30px;color:#fff;font-size:14px;text-indent:28px;">
         
          <span>JavaCat 博客平台是一个包括 前端技术栈、后端技术栈、服务部署、地理信息相关技术、产品开发的代码分享与博客记录平台，主要提供地图应用类产品的开发记录，截至目前为止已有100人注册并使用JavaCat 博客平台，使用JavaCat 博客平台将给您带来更加便利的体验，我们期待您的使用。</span>
        </div>

      </div>
      <div class="rihgt-box">
        <p style="margin-bottom:20px;">
          <span style="font-size:20px;font-weight:560;color:#777;">注&nbsp;册</span>
          <span style="float:right;font-size:12px;margin-top:8px;">已有账号？<el-link type="primary" :underline="false" @click="$router.push({path:'/login'})">去登陆</el-link></span>
        </p>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm" size="small">
          <el-form-item  prop="email">
            <el-input v-model="ruleForm.email" type="text" placeholder="请输入邮箱" prefix-icon="el-icon-date">
            </el-input>
          </el-form-item>

          <el-form-item  prop="code" >
            <el-input v-model="ruleForm.code" type="text" placeholder="请输入验证码" prefix-icon="el-icon-lock" style="width:180px"></el-input>
            <el-button type="primary" size="small" style="float:right;width:110px;" :disabled="canSendMail" @click="sendMail">{{sendMailTitle}}</el-button>
          </el-form-item>

          <el-form-item  prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>

          <el-form-item  prop="repassword">
            <el-input v-model="ruleForm.repassword"  type="password" placeholder="请再次输入密码" prefix-icon="el-icon-lock"></el-input>
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
            <el-button type="primary" size="small" style="width:300px;margin:-top:12px;"  @click="submitForm('ruleForm')">立&nbsp;即&nbsp;注&nbsp;册</el-button> 
          </el-form-item>
        </el-form>
       
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
        ruleForm: {
         email:"",
         code:"",
         password:"",
         repassword:"",
         agree:[],
        },
        rules: {
          email: [
              {required: true, message: '请输入邮箱号', trigger: 'blur'},
              {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式错误',trigger: 'blur'},
              // {validator:,trigger: 'blur'}
            ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 6, max:6,message: '验证码错误', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur' },
            {pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/, message: '密码为数字，大小写字母，特殊符包含三种，长8-30位',trigger: 'blur'  },
            // 密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为8-30位，（判断的时候不区分大小写)
          ],
         repassword: [
           { required: true, validator: validatePass2, trigger: 'blur' }
          ],
          agree: [
            { type: 'array', required: true, message: '请先阅读并同意使用', trigger: 'change' }
          ]
        },
      waitTime:60,
      timeout:null,
      sendMailTitle:"获取验证码",
      canSendMail:false,
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    sendMail(){
      this.$refs['ruleForm'].validateField('email', valid => {
        console.log(valid);
      if (valid== "请输入邮箱号" || valid== "邮箱格式错误") { 
        return null;
      } else { 
          let _this = this;
          _this.canSendMail = true;
          _this.sendMailTitle = "重新获取( "+_this.waitTime+" )"

          this.timeout = setInterval(function(){
            if(_this.waitTime>0){
              _this.waitTime--;
              _this.sendMailTitle = "重新获取( "+_this.waitTime+" )"
            }else{
              _this.waitTime = 60;
              clearInterval(_this.timeout);
              _this.timeout = null;
              _this.sendMailTitle = "发送验证码";
              _this.canSendMail = false;
            }
          },1000)
      }
    })
      


    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
  padding: 20px 50px;
  float:left;
}

::v-deep .el-input__inner{
  border-radius:0px;
}

.other-login{
  width:300px;
  height:80px;
  border-top:1px solid #ddd;
  margin-top:30px;
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
  margin:24px 15px;
  float:left;
  border-radius:50%;
}



</style>