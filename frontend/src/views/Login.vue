<template>
    <div class="login_container" >
      <div class="login_box">
        <!---头像--->
        <div class="avatar_box">
            <!--../assets/logo.jpg-->
          <img src="../assets/logo.png" alt="" />
        </div>
        <!-- 表单区域 -->
        <el-form ref="loginFormRef"
                 :model="loginForm"
                 :rules="loginFormRules"
                 label-width="0px" class="login_form">
          <el-form-item prop="username"><!-- 用户名 -->
            <el-input placeholder="请输入用户名" :prefix-icon="UserFilled" size="large" v-model="loginForm.username" >
            </el-input>
          </el-form-item>
          <el-form-item prop="password"><!-- 密码 -->
            <el-input type="password" placeholder="请输入密码" :prefix-icon="MoreFilled" size="large" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item class="btns"><!-- 按钮区域 -->
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="signup">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import { MoreFilled, UserFilled } from "@element-plus/icons-vue";
  import axios from "axios";
  export default {
    computed: {
      MoreFilled() {
        return MoreFilled;
      },
      UserFilled() {
        return UserFilled;
      }
    },
    data() {
      return {
        //登录表单的数据对象绑定
        loginForm: {
          username: '',
          password: '',
        },
        //表单验证规则对象
        loginFormRules: {
          //用户名是否合法
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min:4 , max: 8, message: '请输入用户名长度为4到8个字符', trigger: 'blur' },
          ],
          //验证密码是否合法
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        },
  
      };
    },
    mounted() {
      // Set username if passed via query parameter
      if (this.$route.query.username) {
        this.loginForm.username = this.$route.query.username;
      }
    },
  
    methods: {
      signup() {
        window.sessionStorage.clear();
        this.$router.push('/signUp');
      },
      async login() {
        await this.$refs.loginFormRef.validate(async (valid) => {
          if (!valid) return; //false 不执行登录
          //true执行登录
          try {
            const {data: res} = await axios.post("http://localhost:8000/student/login", this.loginForm, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            if (res.status === 200) {
              console.log(res);
              this.$message.success("登录成功！");
              //保存登录后的token状态
             // window.sessionStorage.setItem("token", res.data.access_token);
             // console.log(res.data.token);
              //存储userId
              window.sessionStorage.setItem('userId', res.data.user.username);
              console.log(this.loginForm.username)
              if (this.loginForm.username === "admin" && this.loginForm.password === "123456")
                this.$router.push("/admin");//登录跳转
              else this.$router.push("/");//登录跳转
            } else {
              console.log(res);
              return this.$message.error("登录失败！");
            }
          } catch (error) {
            if (error.response) {
              // 请求已发出，但服务器响应状态码不在2xx范围内
              console.error('响应错误', error.response.data);
            } else if (error.request) {
              // 请求已发出但没有收到响应
              console.error('请求错误', error.request);
            } else {
              // 发生在设置请求时触发的错误
              console.error('错误', error.message);
            }
          }
        });
      }
    },
  };
  </script>
  
  <style scoped lang="less">
  .login_container {
    height: 100%;
    position: relative;
    /* 设置背景图 */
    background-image: url('../assets/background.jpg');//../assets/动图.gif
    background-size: cover;
    background-position: center;
  }
  
  .login_box {
    width: 450px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.8); /* 设置登录框背景色及透明度 */
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .avatar_box {
    height: 130px;
    width: 130px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  .btns {
    display: flex;
    padding-left: 270px;
  }
  </style>
  