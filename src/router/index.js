import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = []
const routerFiles = require.context('./module', false, /\.js$/)
routerFiles.keys().forEach(fileName => {
  console.log(routerFiles(fileName).default)
  routes.push(routerFiles(fileName).default)
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
