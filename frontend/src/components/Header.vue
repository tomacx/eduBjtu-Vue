<template>
          <div class="logo">智慧课程平台</div>
            <div class="menu">
              <el-menu :default-active="activeMenu" mode="horizontal" class="el-menu-demo"@select="handleSelect">
    <el-menu-item index="1">我的课程</el-menu-item>
                <el-menu-item index="2">我的课表</el-menu-item>
              </el-menu>  
            </div>
            <div class="profile">
              <el-avatar>
                <user-filled />
              </el-avatar>
              <div class="header_right_button">{{ userName }}</div>
              <div><el-button class="header_right_button" @click="goToProfile">个人中心</el-button></div>
              <div><el-button class="header_right_button" @click="logout">安全退出</el-button></div>
            </div>
</template>
<script>
import { UserFilled } from "@element-plus/icons-vue";

export default {
    name: 'Header',
    components: {
        UserFilled,
    },
    data() {
        return {
            userName: 'testUser',
        }
    },
    methods: {
    goToProfile() {
      // 跳转到个人中心页面
      this.$router.push('/profile');
    },
    handleSelect(key) {
      if (key === '1') {
        this.$router.push('/');  // 返回主页
      } else if (key === '2') {
        this.$router.push('/timetable');
      }
    },
    logout() {
      // 执行退出操作
      console.log('用户已退出');
      // 例如，清除token并跳转到登录页面
      this.$router.push('/login');
    },
  },

}
</script>
<style scoped lang="less">

.header{
  height:10vh;
  background-color: #597fc1;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Use the background color similar to the image */
  color: white;
}

.logo {
  font-size: 3.5vh;
  font-weight:bolder;
}
.menu {
  flex: 1;
  margin-left: 5vb;
  margin-top: 4vh;
}

.el-menu-demo {
  background-color: transparent;
}

.profile {
  display: flex;
  align-items: center;
}

.el-avatar {
  margin-right: 1vb;
  color: #CCCCCC;
  background-color: aliceblue;
}

.el-menu-item{
  font-weight: bold;
  font-size: 2vh;
}

.header_right_button{
  margin-right: 1vb;
}
</style>