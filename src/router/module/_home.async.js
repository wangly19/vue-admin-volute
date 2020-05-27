import Layout from '@/layout'
export default {
  path: '/',
  name: '/',
  meta: {
    title: '首页',
    icon: 'home',
    isShow: true,
    roles: ['admin'],
    cache: true
  },
  component: Layout,
  redirect: '/dash',
  children: [
    {
      path: '/dash',
      name: 'dash',
      meta: {
        title: '首页',
        icon: '',
        isShow: true,
        roles: ['admin'],
        cache: true
      },
      component: resolve => require(['@/views/Home'], resolve)
    }
  ]
}
