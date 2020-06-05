/**
 * 应用程序公共类
 * - isZoom 收缩
 * - keepList 缓存页面
 */
import { ObserveMap } from '@/tools/project.tool'

const state = {
  isZoom: false,
  keepList: new Set(),
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
  pushKeepList (state, componentName) {
    state.keepList.add(componentName)
  },
  changeCacheKeepMap (state, route) {
    const newMap = new ObserveMap(this.cacheKeepMap).set(route.name, route)
    this.cacheKeepMap = new Map(newMap)
  },
  clearKeepStack (state, key) {
    state.keepList.delete(key)
    const swapMap = new Map(state.cacheKeepMap)
    swapMap.remove(key)
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
