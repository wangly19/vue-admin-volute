import router from './index'
// import Store from '@/store'
// import async from '@/router/asyncRouter'
import Layout from '@/layout'

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // const list = await Store.dispatch('GenerateRoutes', ['admin'])
    router.addRoutes([{
      path: '/',
      name: '/',
      meta: {
        title: '首页',
        icon: '',
        isShow: true,
        roles: ['admin']
      },
      component: Layout,
      redirect: '/dash',
      children: [
        {
          path: 'dash',
          name: 'dash',
          meta: {
            title: '首页',
            icon: '',
            isShow: true,
            roles: ['admin']
          },
          component: resolve => require(['@/views/Home'], resolve)
        }
      ]
    }])
    next({ ...to, replace: true })
  }
})
