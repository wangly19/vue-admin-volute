/**
 * 应用程序公共类
 * - isZoom 收缩
 * - keepList 缓存页面
 */

const state = {
  isZoom: false,
  keepList: []
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
  pushKeepList (state, config) {
    state.keepList.find(el => el.path === config.path) || state.keepList.push(config)
  }
}

const actions = {}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
