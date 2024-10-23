<template>
    <div class="schedule-page">
        <el-header class="header">
          <Header/>
        </el-header>
      <div class="content">
        <h1>我的课表</h1>
        <Timetable />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import Timetable from '@/components/Timetable.vue'
  
  export default {
    name: 'SchedulePage',
    components: {
      Header,
      Timetable
    }
  }
  </script>
  
  <style scoped>
  .schedule-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
    text-align: center;
  }

.header{
  height:10vh;
  background-color: #597fc1;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Use the background color similar to the image */
  color: white;
}
  </style>