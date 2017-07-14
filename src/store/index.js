import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import category from './modules/category'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    category
  }
})

export default store
