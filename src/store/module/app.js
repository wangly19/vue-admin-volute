/**
 * 应用程序公共类
 * - isZoom 收缩
 * - keepList 缓存页面
 */

const state = {
  isZoom: false,
  cacheKeepMap: new Map()
}

const mutations = {
  /**
   * 设置底部收缩
   * @param {State} state state对象
   * @param {Boolean} bool 是否收缩后的Zoom
   */
  setZoom (state, bool) {
    state.isZoom = bool
  },
  /**
   * 添加缓存组件信息
   * @param {RouteConfig} route
   */
  changeCacheKeepMap (state, route) {
    const swapMap = new Map(state.cacheKeepMap)
    swapMap.set(route.name, route)
    state.cacheKeepMap = swapMap
  },
  /**
   * 清除缓存组件
   * @param {T<String>} key Map的键名 
   */
  clearKeepStack (state, key) {
    const swapMap = new Map(state.cacheKeepMap)
    swapMap.delete(key)
    state.cacheKeepMap = new Map(swapMap)
  }
}

const actions = {}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
