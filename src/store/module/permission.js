import { defaultRouter, rolesRoutes } from '@/router'
const state = {
  currentRoutes: [],
  addRoutes: []
}

const mutations = {
  setRoutesList (state, list) {
    state.addRoutes = list
    state.currentRoutes = defaultRouter.concat(list)
  }
}

const actions = {
  GenerateRoutes ({ commit }, roles) {
    return new Promise((resolve) => {
      let sendRoutes
      if (roles.includes('root')) {
        // 当前为root权限，自动加载所有路由
        sendRoutes = rolesRoutes
      } else {
        sendRoutes = filterRoutes(rolesRoutes, roles)
      }
      commit('setRoutesList', sendRoutes)
      resolve(sendRoutes)
    })
  }
}

/**
 * 判断路由权限是否存在
 * @param route 路由
 * @param roles 用户权限列表
 */
function hasRoles (route, roles) {
  if (route.meta && route.meta.roles) {
    // 如果meta中存在路由权限列表
    return roles.some(role => route.meta.roles.includes(role))
  }
  return true
}

/**
 * 过滤权限方法
 * @param routes 异步路由表
 * @param roles 用户权限列表
 */
function filterRoutes (routes, roles) {
  const result = []
  routes.forEach(item => {
    const temp = { ...item }
    if (hasRoles(temp, roles)) {
      if (temp.children) filterRoutes(temp.children, roles)
    }
    result.push(temp)
  })
  return result
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
