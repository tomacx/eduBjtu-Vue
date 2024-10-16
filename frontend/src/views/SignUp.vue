<script >
import {MoreFilled, UserFilled, Message,Warning} from "@element-plus/icons-vue"
import axios from "axios";
export default {
  computed: {
    Warning() {
      return Warning
    },
    Message() {
      return Message
    },
    MoreFilled() {
      return MoreFilled
    },
    UserFilled() {
      return UserFilled
    }
  },
  data() {
    return {
      signUpForm: {
        username: '',
        password: '',
        mail: '',
        verificationCode:''
      },
      //表单验证规则对象
      signUpRules:{
        //用户名是否合法
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:3,max:12,message: '请输入用户名长度4到8个字符',trigger:'blur'},
        ],
        //验证密码是否合法
        password:[
          { required: true, message: '请输入登密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        //邮件是否合法
        mail:[
          {required:true,message:'输入绑定邮箱',trigger:'blur'},
        ],
        //验证码是否合法
        verificationCode:[
          {required:true,message:'输入验证码',trigger:'blur'},
          {min:6,max:6,message: '六位验证码',trigger:'blur'},
        ]
      }
    };
  },

  async created() {
    await axios
        .post("http://localhost:8000/users/signUp/session_key")
        .then(function (response) {
          // 处理成功情况
          console.log(response)
          //保存登录后的session_key状态
          window.sessionStorage.setItem("session_key", response.data.session_key);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error)
        })
        .finally(function () {
          // 总是会执行
        })
  },

  methods:{
    cancel(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    },

    async signUpUser(){
      await this.$refs.signUpFormRef.validate(async (valid) => {
        if (!valid) return;//false 不执行登录
        //true执行登录
        try{
          const{data:res}=await axios.post("http://localhost:8000/users/signUp",{signUpForm:this.signUpForm,session_key:window.sessionStorage.getItem('session_key')},{
            headers:{
              'Content-Type': 'application/json'
            }
          });
          if(res.status){
            console.log(res)
            console.log(res.data);
            if(res.status === 400){
              console.log(res);
              this.$message.error("用户名已存在");
            }
            this.$router.push({
              path:'/login',
              query: {
                username: res.data.username,
              },
            });
          }
        }catch(error){
          if (error.response) {
            console.error('响应错误', error.response.data);
          } else if (error.request) {
            console.error('请求错误', error.request);
          } else {
            console.error('错误', error.message);
          }
        }
    });
    },
    async sendVerificationCode(){
      console.log("邮箱要求通过");
      await this.$refs.signUpFormRef.validateField("mail", async (valid) => {
        if (!valid) return;
          try {
            console.log("邮箱要求通过");
            // 传输到后端发送邮箱
            const{data:res} = await axios.post("http://localhost:8000/users/signUp/sendVerificationCode", { email: this.signUpForm.mail ,session_key:window.sessionStorage.getItem('session_key')}, {
              headers:{
                'Content-Type': 'application/json'
              }
            })
            if(res.status === 200){
              console.log(res);
              this.$message.success("验证码已发送");
            }
          } catch (error) {
            if (error.response) {
              console.error('响应错误', error.response.data);
            } else if (error.request) {
              console.error('请求错误', error.request);
            } else {
              console.error('错误', error.message);
            }
          }

      });
    },
  },
};
</script>

<template>
  <div class="login_container" >
    <div class="login_box">
      <!---头像--->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt=""/>
      </div>
      <!-- 表单区域 -->
      <el-form ref="signUpFormRef"
          :model="signUpForm" :rules="signUpRules" label-width="0px" class="login_form">
        <el-form-item prop="username"><!-- 用户名 -->
          <el-input placeholder="请输入用户名" :prefix-icon="UserFilled" size="large" v-model="signUpForm.username" >
          </el-input>
        </el-form-item>
        <el-form-item prop="password"><!-- 密码 -->
          <el-input  type="password" placeholder="请输入密码" :prefix-icon="MoreFilled" size="large" v-model="signUpForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="mail"><!-- 邮箱 -->
          <el-input   placeholder="请输入邮箱" :prefix-icon="Message" size="large" v-model="signUpForm.mail">
            <template #append>
              <el-button type="primary" @click="sendVerificationCode" >发送验证码</el-button>
          </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="verificationCode"><!-- 邮箱验证码 -->
          <el-input   placeholder="请输入验证码" :prefix-icon="Warning" size="large" v-model="signUpForm.verificationCode"></el-input>
        </el-form-item>
        <el-form-item class="btns"><!-- 按钮区域 -->
          <el-button type="primary" @click="signUpUser">注册</el-button>
          <el-button type="info" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.login_container{
  background-color: #2b4b6b;
  height: 100%;
  /* 设置背景图 */
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
}
.login_box {
  width: 450px;
  height: 400px;
  background-color: #fff;
  border-radius: 3px; //圆角效果
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //less语法的嵌套
  .avatar_box {
    height: 130px;
    width: 130px;
    background-color: #fff;
    border: 1px solid #eee; //加个灰色边框
    border-radius: 50%; //div组件变成圆形
    padding: 10px; //图片和边框之间有10px间隙
    box-shadow: 0 0 10px #ddd; //添加一个阴影，向外扩散10像素
    //头像居中，向左移动box的50%，再向右移动自身的-50%，向上移动该组件高度的-50%，
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%; //图片变成圆形
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;//靠下
  width: 100%;
  padding: 0 20px;//上下内边距0，左右内边距20px
  //border-box为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
  //实际宽度会是width减去border + padding的计算值
  //此处是为了不让input超出我们的登录父div
  box-sizing: border-box;
}

.btns {
  display: flex;//flex布局
  //justify-content控制项目在横轴的对齐方式
  //flex-start即左对齐，center 为居中，对应的flex-end为右对齐。
  padding-left: 270px;
}
</style>