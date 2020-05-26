
/**
 * 路由需要鉴定权限，
 * - async名称的需要鉴权
 * - 反之不需要验证。
 */
const rolesRoutes = []
const routerFiles = require.context('./module', false, /\.js$/)
routerFiles.keys().forEach(fileName => {
  if (fileName.includes('async')) {
    routerFiles(fileName).default && rolesRoutes.push(routerFiles(fileName).default)
  }
})
export default rolesRoutes
