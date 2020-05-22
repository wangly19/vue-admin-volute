import Router from './index'
import Store from '@/store'

Router.beforeEach(async (to, from, next) => {
  console.log(to, from, next)
  const list = await Store.dispatch('GenerateRoutes', ['admin'])
  Router.addRoutes(list)
  next({ ...to, replace: true })
})
