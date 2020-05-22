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
  pushKeepList (state, router) {
    const findResult = state.keepList.find(el => el.name === router.name)
    findResult || state.keepList.push(router)
  }
}

const actions = {}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
