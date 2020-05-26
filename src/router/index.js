import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultRouter from './module'
Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  routes: defaultRouter
})
const router = createRouter()
export default router
