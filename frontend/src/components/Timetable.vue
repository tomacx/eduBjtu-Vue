<template>
  <div class="timetable">
    <el-table :data="scheduleData" border style="width: 100%">
      <el-table-column prop="time" label="时间" width="100"></el-table-column>
      <el-table-column v-for="(day, index) in weekDays" :key="day" :label="day" :prop="dayProps[index]"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Timetable',
  data() {
    return {
      weekDays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      dayProps: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      scheduleData: [
        {
          time: '8:00-9:50',
          monday: '项目管理',
          tuesday: '机器学习',
          wednesday: '计算机网络',
          thursday: '如何点外卖',
          friday: '大雾',
          saturday: '',
          sunday: ''
        },
        {
          time: '10:10-12:00',
          monday: '项目管理',
          tuesday: '机器学习',
          wednesday: '计算机网络',
          thursday: '如何点外卖',
          friday: '大雾',
        },
        {
          time: '14:10-16:00',
          monday: '项目管理',
          tuesday: '机器学习',
          wednesday: '计算机网络',
          thursday: '如何点外卖',
          friday: '大雾',
        }
      ]
    }
  }
}
</script>

<style scoped>
.timetable {
  width: 100%;
  overflow-x: auto;
}
</style>