const user = {
  state: {
    token: localStorage.getItem('token')
  },
  
  mutations: {
    // 设置token
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('token', token)
    }
  },

  actions: {
    // return new Promise((resolve, reject) => {
    //   resolve();
    // })

    // 登录
    login({commit}, userform) {
      return new Promise((resolve, reject) => {
        const token = JSON.stringify(userform)
        commit('SET_TOKEN', token)
        resolve();
      })
    },
  },

  getters: {
    token: state => state.token
  }
}

export default user
