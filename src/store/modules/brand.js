import {BrandList, NewBrand, DeleteBrand} from '../../config/api/brand'
const brand = {
  namespaced: true,
  state: {
    brands: []
  },
  mutations: {
    BRAND_LIST: (state) => {
      BrandList().then((data) => {
        state.brands = data.brands
      })
    },

    NEW: (state, form) => {
      NewBrand(form).then((data) => {
        state.brands = data.brands
      })
    },

    DELETE: (state, index) => {
      DeleteBrand(index).then((data) => {
        state.brands = data.brands
      })
    }
  },
  actions: {
    brandList: ({commit}) => {
      return new Promise((resolve, reject) => {
          commit('BRAND_LIST')
          resolve()
      })
    },

    new: ({commit}, data) => {
      return new Promise((resolve, reject) => {
          commit('NEW', data)
          resolve()
      })
    },

    delete: ({commit}, index) => {
      return new Promise((resolve, reject) => {
          commit('DELETE', index)
          resolve()
      })
    }
  },
  getters: {}
}

export default brand
