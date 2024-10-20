import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
// 引入 Element Plus
import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ELementPlus)
app.use(router)
app.use(store)
app.mount('#app')
console.log('Vue 3 应用已经成功初始化');