import { getAllCategories } from '../../config/api/category'

const category = {
    state: {
        categories: ''
    },
    mutations: {
        // 获取全部列表
        GET_CATEGORIES: (state) => {
            getAllCategories().then((response) => {
                state.categories = response.categories
            })
        }
    },
    actions: {
        // 获取全部列表
        getCategories({ commit }) {
            return new Promise((resolve, reject) => {
                commit('GET_CATEGORIES')
                resolve()
            })
        }
    },
    getters: {}
}

export default category