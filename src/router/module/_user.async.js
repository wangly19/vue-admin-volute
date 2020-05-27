import Layout from '@/layout'
export default {
  path: '/user',
  name: 'user',
  meta: {
    title: '用户',
    icon: 'user',
    isShow: true,
    roles: ['xxxx'],
    cache: true
  },
  component: Layout,
  redirect: '/user/info',
  children: [
    {
      path: '/user/info',
      name: 'userinfo',
      meta: {
        title: '个人信息',
        icon: '',
        isShow: true,
        roles: ['xxxxxx'],
        cache: true
      },
      component: resolve => require(['@/views/User/UserInfo.vue'], resolve)
    }
  ]
}
