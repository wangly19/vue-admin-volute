/**
 * 用户全局属性模块
 * - roles 用户权限
 */
const state = {
  roles: []
}

const mutations = {
  setRoles (state, newRoles) {
    state.roles = newRoles
  }
}

const actions = {
  getInfo ({ commit }) {
    commit('setRoles', ['root', 'phone', 'map'])
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
