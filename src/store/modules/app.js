const app = {
    state: {},
    mutations: {},
    actions: {},
    getters: {
        token: (state, getters, rootState, rootGetters) => rootState.user.token,
        currentUser: (state, getters, rootState, rootGetters) => rootState.user.currentUser
    }
}

export default app