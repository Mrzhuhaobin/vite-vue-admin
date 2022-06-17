
let str = localStorage.getItem('enableRouteList');
let enableRouteList = []
if (str) {
  // console.log('str', str)
  enableRouteList = JSON.parse(str);
}

export default {
  namespaced: true,
  state: {
    enableRouteList
  },
  actions: {
    setRouteList ({ commit }, payload) {
      commit('doSetRoute', payload)
    }
  },
  mutations: {
    doSetRoute (state, payload) {
      state.enableRouteList = payload
    }
  }
}