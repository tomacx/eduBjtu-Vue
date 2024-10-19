<template>
  <div class="home">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <Header/>
        </el-header>
        <MainContainer/>
      </el-container>
    </div>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import Header from '@/components/Header.vue';
export default {
  name: 'HomeView',
  components: {
    MainContainer,
    Header,
  },
  data(){
    return {
     
    }
  }
}

</script>
<style scoped lang="less">
.home {
  height: 100vh;
}

.common-layout {
  height: 100%;
}

.el-container {
  height: 100%;
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
