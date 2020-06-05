import Layout from '@/layout'
import Home from '@/views/Home'
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
      name: 'DashHome',
      meta: {
        title: '首页',
        icon: '',
        isShow: true,
        roles: ['admin'],
        cache: true
      },
      component: Home
    }
  ]
}
