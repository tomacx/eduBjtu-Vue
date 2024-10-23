import { createStore } from 'vuex'

export default createStore({
  state: {
    // 用户信息
    userInfo: {
      userId:'',
      username: '',  // 用户名
      userNum: '',
      password:'',
      status: '',  // 用户身份
    },
  },
  getters: {
  },
  mutations: {
     // 更新 userInfo
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
     // 异步操作通过 action 触发 mutation
     updateUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
    },
  },
  modules: {
  }
})
