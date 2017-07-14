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
        },
        // 新增分类
        NEW_CATEGORY: (state) => {}
    },
    actions: {
        // 获取全部列表
        getCategories({ commit }) {
            return new Promise((resolve, reject) => {
                commit('GET_CATEGORIES')
                resolve()
            })
        },

        newCategory({ commit }, fromdata) {
            return new Promise((resolve, reject) => {
                commit('NEW_CATEGORY', formdata)
                resolve()
            })
        }
    },
    getters: {}
}

export default category