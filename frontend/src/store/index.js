import { createStore } from 'vuex'

export default createStore({
  state: {
    // 用户信息
    userInfo: {
      username: 'testUser',  // 用户名
      userNum:'12345678',
      status: '1',  // 用户身份
    },
  },
  getters: {
  },
  mutations: {
     // 更新用户信息
     updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    // 异步获取用户信息
    fetchUserInfo({ commit }, userInfo) {
      commit('updateUserInfo', userInfo);
    },
  },
  modules: {
  }
})
