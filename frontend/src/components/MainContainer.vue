<template>
    <el-container>
      <!-- 左侧个人信息 -->
      <el-aside width="250px" class="aside">
        <el-card>
          <h3>个人信息</h3>
          <el-divider />
          <div class="profile-info">
            <el-avatar icon="el-icon-user" size="large" />
            <div class="profile-name">姚苏皖</div>
            <div class="profile-role">
              <el-tag type="warning">学生</el-tag>
            </div>
            <div class="profile-details">
              <p>学校：主校区</p>
              <p>邮编：</p>
              <p>电话：</p>
            </div>
            <el-link type="primary" icon="el-icon-edit">编辑</el-link>
          </div>
        </el-card>
  
        <!-- 通知提醒 -->
        <el-card class="notification-card">
          <h3>通知提醒</h3>
          <el-divider />
          <p>0 个学校通知未读</p>
          <p>21 个课程互动消息未读</p>
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
                <img src="path-to-image.jpg" class="course-image" />
                <div class="course-info">
                  <p class="course-title">{{ course.name }}</p>
                  <p>课程号：{{ course.id }}</p>
                  <p>课序号：{{ course.sequence }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
  
      <!-- 右侧通知 -->
      <el-aside width="250px" class="aside">
        <el-card>
          <h3>通知公告</h3>
          <el-divider />
          <p>2024-02-23 智慧课程平台操作手册（学生版）</p>
        </el-card>
      </el-aside>
    </el-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedSemester = ref('2024-2025第一学期');
  const courses = ref([
    { name: '文化遗产与旅游', id: 'A112066B', sequence: '01' },
    { name: '羽毛球（高级）', id: 'A121066B', sequence: '07' },
    { name: '软件项目管理与产品运营', id: 'M310008B', sequence: '02' },
    { name: '机器学习', id: 'M310006B', sequence: '03' },
    { name: '计算机组成原理', id: 'M310001B', sequence: '03' },
    { name: '软件测试与质量保证', id: 'M310007B', sequence: '03' }
  ]);
  </script>
  
  <style scoped>
  .el-container {
    display: flex;
  }
  
  .aside {
    background-color: #f5f5f5;
  }
  
  .profile-info {
    text-align: center;
  }
  
  .profile-name {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .profile-role {
    margin-top: 10px;
  }
  
  .profile-details {
    text-align: left;
    margin-top: 10px;
  }
  
  .notification-card {
    margin-top: 20px;
  }
  
  .course-list {
    margin-top: 20px;
  }
  
  .course-card {
    text-align: center;
  }
  
  .course-image {
    width: 100%;
    height: auto;
  }
  
  .course-info {
    margin-top: 10px;
  }
  
  .course-title {
    font-weight: bold;
  }
  
  .main{
  height:90vh;
background-color: #CCCCCC;
}
  </style>
  