<template>
    <el-container>
      <!-- 左侧个人信息 -->
      <el-aside width="250px" class="lside">
        <el-card>
          <h3>个人信息</h3>
          <el-divider />
          <div class="profile-info">
            <el-avatar size="large">
                <user-filled />
              </el-avatar>
            <div class="profile-name">{{userName}}</div>
            <div class="profile-role">
              <el-tag type="warning" v-if="status === 1">学生</el-tag>
              <el-tag type="warning" v-else-if="status === 2">老师</el-tag>
            </div>
            <div class="profile-details">
              <p class="profile_info">学校：{{北京交通大学}}</p>
              <p class="profile_info">邮箱：</p>
              <p class="profile_info">{{ userNum }}@bjtu.edu.cn</p>
            </div>
            <div><el-buttom class="edit" @click="toProfile">编辑</el-buttom></div>
          </div>
        </el-card>
  
        <!-- 收藏及笔记 -->
        <el-card class="notification-card">
            <div class="button-container">
          <div class="button">
            <el-button class="large-button">
              <el-icon><StarFilled /></el-icon>
              <div class="button-text">
                <div class="detail">收藏</div>
              <div class="detail">{{ collectionNum }}</div>
              </div>
            </el-button>
          </div>
          <el-divider direction="vertical" style="height: 7vh;" />
          <div class="button">
            <el-button class="large-button">
              <el-icon><Notebook /></el-icon>
              <div class="button-text">
                <div class="detail" >笔记</div>    
                <div class="detail" >{{ noteNum }}</div>
              </div>
            </el-button>
            </div>
            </div>
        </el-card>

      </el-aside>
  
      <!-- 中间课程列表 -->
      <el-main>
        <el-card>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-select v-model="selectedSemester" placeholder="请选择学期">
                <el-option label="2024-2025第一学期" value="2024-2025第一学期"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="course-list">
            <el-col :span="8" v-for="(course, index) in courses" :key="index">
              <el-card class="course-card" shadow="hover">
                <img src="../assets/classCover.jpg" class="course-image" />
                <div class="course-info">
                  <p class="course-title">{{ course.name }}</p>
                  <p>课程号：{{ course.id }}</p>
                  <p>任课老师：{{ course.teacher }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
  
      <!-- 右侧通知 -->
      <el-aside  class="rside">
        <el-card>
          <h3>通知公告</h3>
          <el-divider />
          <p>2024-02-23 智慧课程平台操作手册（学生版）</p>
        </el-card>
      </el-aside>
    </el-container>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { UserFilled,StarFilled,Notebook } from "@element-plus/icons-vue";
import axios from 'axios';

  export default {
    data() {
          return {
              userName: 'testUser',
              status: 1, // 默认为1表示学生
              userNum:'12345678',
            collectionNum: '',
              noteNum:'',
            selectedSemester: '2024-2025第一学期',
            courses: [
                { name: '文化遗产与旅游', id: 'A112066B', teacher: '张三' },
                { name: '羽毛球（高级）', id: 'A121066B', teacher: '李四' },
                { name: '软件项目管理与产品运营', id: 'M310008B', teacher: '王五' },
                { name: '机器学习', id: 'M310006B', teacher: '李四' },
                { name: '计算机组成原理', id: 'M310001B', teacher: '李四' },
                { name: '软件测试与质量保证', id: 'M310007B', teacher: '赵六' }
            ]
      };
    },
    components: {
        UserFilled,
        StarFilled,
        Notebook,
    },
    mounted() {
      //this.getCourseList();
      //this.getNotificationList();
    },
    methods: {
      toProfile() {
        // 跳转到个人中心页面
        this.$router.push('/profile');
      },
      getCourseList() {
        axios.post('http://localhost:8000/home/courselist',{params:{userId:this.$store.state.userId}})
      },
      getNotificationList() {
        
      },
    },
  };
</script>

  
  <style scoped>
  .el-container {
    display: flex;
  }
  
  .lside {
    margin-left: 2vb;
    margin-top:2vb;
    background-color: white;
  }
  
  .rside {
    margin-right: 2vb;
    margin-top:2vb;
    background-color: white;
    width:45vb;
  }

  .profile-info {
    text-align: center;
  }
  
  .profile-name {
    font-size: 2vb;
    font-weight: bold;
    margin-top: 1vb;
  }
  
  .profile-role {
    margin-top: 10px;
  }
  
  .profile-details {
    text-align: left;
    margin-top: 1vb;
  }
  
  .notification-card {
    margin-top: 2vb;
    padding: 1vb;
  }

  .button-container {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

  .course-list {
    margin-top: 2vb;
  }
  
  .course-card {
    text-align: center;
  }
  
  .course-image {
    width: 100%;
    height: auto;
  }
  
  .course-info {
    margin-top: 2vb;
  }
  
  .course-title {
    font-weight: bold;
  }

  .main{
  height:90vh;
background-color: #CCCCCC;
}
.profile_info{
    margin-top: 1vb;
}
.edit{
    color:#597fc1;
}
.el-icon{
    margin-right: 1vb;
}

.button-text {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
}

.detail {
  font-size: 1.5vb; /* 调整字体大小 */
  margin-top:1vb
}
.large-button {
  border: transparent;
}
</style>
  