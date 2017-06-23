let token = null

if (localStorage.getItem('token')) {
  token = localStorage.getItem('token')
}

const user = {
  state: {
    token: token
  },
  mutations: {
    // 设置token
    SET_TOKEN: (state, token) => {
      state.token = token
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
      })
    },
  },
  getters: {}
}

export default user
