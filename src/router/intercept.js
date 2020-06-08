import router from './index'
import Store from '@/store'

// 白名单，不需要缓存和记录的页面
const whitePath = ['/404', '/login']

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 不是去登录界面, 获取路由
    if (Store.getters.roles.length === 0) {
      try {
        Store.dispatch('getInfo')
        const list = await Store.dispatch('GenerateRoutes', ['root'])
        router.addRoutes(list)
        next({ ...to, replace: true })
      } catch (error) {
        console.log(error)
        next('/login')
      }
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  if (!whitePath.includes(to.path)) {
    Store.commit('changeCacheKeepMap', to)
  }
})
