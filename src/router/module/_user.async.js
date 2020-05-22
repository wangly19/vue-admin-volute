import Layout from '@/layout'
export default {
  path: '/user',
  name: 'user',
  meta: {
    title: '用户',
    icon: '',
    isShow: true,
    roles: ['admin']
  },
  component: Layout,
  redirect: '/user/info',
  children: [
    {
      path: '/info',
      name: 'userinfo',
      meta: {
        title: '个人信息',
        icon: '',
        isShow: true,
        roles: ['admin']
      },
      component: resolve => require(['@/views/User/UserInfo.vue'], resolve)
    }
  ]
}
