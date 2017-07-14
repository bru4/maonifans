import { userLogin } from '../../config/api/user'

const user = {
    namespaced: true,

    state: {
        // JSON.parse(localStorage.getItem('token'))
        token: localStorage.getItem('token'),
        currentUser: JSON.parse(localStorage.getItem('currentUser'))
    },

    mutations: {
        // 登录
        LOGIN_IN: (state, formdata) => {
            userLogin(formdata).then((response) => {
                const user = response.user
                state.currentUser = user
                state.token = user.token
                localStorage.setItem('currentUser', JSON.stringify(user))
                localStorage.setItem('token', state.token)
            })
        },
        // 登出
        LOGIN_OUT: (state) => {
            state.token = null
            state.currentUser = null
            localStorage.removeItem('token')
            localStorage.removeItem('currentUser')
        }
    },

    actions: {
        // return new Promise((resolve, reject) => {
        //   resolve();
        // })

        // 登录
        login({ commit }, userform) {
            return new Promise((resolve, reject) => {
                commit('LOGIN_IN', userform)
                resolve()
            })
        },

        //注销
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('LOGIN_OUT')
                resolve()
            })
        }
    },

    getters: {
    }
}

export default user