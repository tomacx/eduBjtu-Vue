<template>
    <el-header class="header">
        <Header/>
    </el-header>
      <div class="personal-page">
        
        <section class="user-profile">
          <img :src="user.avatar" :alt="user.name" class="profile-avatar">
          <h1>{{ user.name }}</h1>
          <p class="user-bio">{{ user.bio }}</p>
          <el-button class="edit-bio-button">编辑</el-button>
          <div class="user-stats">
            <span>关注 {{ user.following }}</span>
            <span>粉丝 {{ user.followers }}</span>
            <span>获赞 {{ user.likes }}</span>
          </div>
        </section>
        <el-dialog title="编辑个人签名" v-model="editBioDialogVisible" width="30%">
      <el-input
        v-model="editedBio"
        type="textarea"
        :rows="3"
        placeholder="请输入新的个人签名"
      ></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editBioDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveBio">确定</el-button>
        </span>
      </template>
    </el-dialog>
        <el-tabs v-model="activeTab" class="content-tabs">
          <el-tab-pane label="提问" name="questions">
            <div v-for="question in user.questions" :key="question.id" class="question-item">
              <h3>{{ question.title }}</h3>
              <p>{{ question.content }}</p>
              <div class="question-stats">
                <span>{{ question.views }} 浏览</span>
                <span>{{ question.answers }} 回答</span>
                <span>{{ question.likes }} 点赞</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="回答" name="answers">
            <div v-for="answer in user.answers" :key="answer.id" class="answer-item">
              <h3>回答了：{{ answer.questionTitle }}</h3>
              <p>{{ answer.content }}</p>
              <div class="answer-stats">
                <span>{{ answer.likes }} 点赞</span>
                <span>{{ answer.comments }} 评论</span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </template>
  
  <script>
  import MainContainer from '@/components/MainContainer.vue'
  import Header from '@/components/Header.vue'
  import { ElButton, ElDialog, ElInput } from 'element-plus'

  export default {
    name: 'Personal',
    components: {
      MainContainer,
      Header,
      ElButton,
      ElDialog,
      ElInput
    },
    data() {
      return {
        activeTab: 'questions',
        user: {
          name: '张三',
          avatar: 'https://example.com/avatar.jpg',
          bio: '热爱学习，分享知识。软件工程专业学生。',
          following: 100,
          followers: 50,
          likes: 1000,
          questions: [
            {
              id: 1,
              title: '如何高效学习数据结构？',
              content: '最近在学习数据结构，感觉有些吃力，有什么好的学习方法吗？',
              views: 200,
              answers: 5,
              likes: 20
            },
            // 更多问题...
          ],
          answers: [
            {
              id: 1,
              questionTitle: '如何准备计算机网络考试？',
              content: '建议从基础概念开始，理解OSI七层模型和TCP/IP协议栈。多做习题，注重实践。',
              likes: 30,
              comments: 3
            },
            // 更多回答...
          ]
        }
      };
    },
    methods: {
    showEditBioDialog() {
      this.editedBio = this.user.bio;
      this.editBioDialogVisible = true;
    },
    saveBio() {
      this.user.bio = this.editedBio;
      this.editBioDialogVisible = false;
    }
  }
  };
  </script>
  
  <style scoped>
  .personal-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .user-profile {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .profile-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .user-bio {
    margin: 10px 0;
    color: #666;
  }
  
  .user-stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    color: #666;
  }
  
  .content-tabs {
    margin-top: 20px;
  }
  
  .question-item, .answer-item {
    border-bottom: 1px solid #eee;
    padding: 15px 0;
  }
  
  .question-stats, .answer-stats {
    display: flex;
    gap: 15px;
    color: #999;
    font-size: 0.9em;
    margin-top: 10px;
  }

.header{
  height:10vh;
  background-color: #597fc1;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Use the background color similar to the image */
  color: white;
}
.user-bio-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.user-bio {
  margin: 0 10px 0 0;
  color: #666;
}

.edit-bio-btn {
  font-size: 0.8em;
}

  </style>