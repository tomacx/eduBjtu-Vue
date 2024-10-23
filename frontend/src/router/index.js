import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import Personal from "@/views/Profile.vue";
import Timetable from "@/views/Timetable.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/login',
    name:'login',
    component:Login,
  },
  {
    path:'/signUp',
    name:'signup',
    component:SignUp,
  },
  {
    path:'/profile',
    name:'personal',
    component:Personal,
  },
  {
    path:'/timetable',
    name:'timetable',
    component:Timetable,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
