import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/**
 * 路由需要鉴定权限，
 * - async名称的需要鉴权
 * - 反之不需要验证。
 */
export const rolesRoutes = []
export const defaultRouter = []
const routerFiles = require.context('./module', false, /\.js$/)
routerFiles.keys().forEach(fileName => {
  console.log(fileName, fileName.includes('async'))
  if (fileName.includes('async')) {
    routerFiles(fileName).default && rolesRoutes.push(routerFiles(fileName).default)
  } else {
    routerFiles(fileName).default && defaultRouter.push(routerFiles(fileName).default)
  }
})

console.log(defaultRouter)

const router = new VueRouter({
  mode: 'history',
  routes: defaultRouter
})

export default router
