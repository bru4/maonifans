const user = {
  state: {
    token: localStorage.getItem('token'),
    currentUser: {
      name: '爆刘继芬',
      role: 'admin',
    }
  },

  mutations: {
    // 设置token
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('token', token)
    },
    LOGIN_OUT: (state) => {
      state.token = null
      localStorage.removeItem('token')
    }
  },

  actions: {
    // return new Promise((resolve, reject) => {
    //   resolve();
    // })

    // 登录
    login({commit}, userform) {
      return new Promise((resolve, reject) => {
        const token = JSON.stringify(userform)// 测试用
        commit('SET_TOKEN', token)
        resolve()
      })
    },

    //注销
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('LOGIN_OUT')
        resolve()
      })
    }
  },

  getters: {
    token: state => state.token,
    currentUser: state => state.currentUser
  }
}

export default user
