let user = localStorage.getItem('user');
let userName = ''
let userType = ''
if (user) {
  user = JSON.parse(user);
  userName = user.userName;
  userType = user.userType;
}

export default {
  namespaced: true,
  state: {
    userName,
    userType
  },
  actions: {
    setUser ({ commit }, payload) {
      commit('doSetUser', payload)
    }
  },
  mutations: {
    doSetUser (state, payload) {
      console.log('payload', payload)
      state.userName = payload.userName;
      state.userType = payload.userType;
      console.log('state', state)
    }
  }
}