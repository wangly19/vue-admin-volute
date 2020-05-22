export default {
  path: '/login',
  name: '/login',
  meta: {
    title: '登录',
    icon: '',
    isShow: false
  },
  component: resolve => require(['@/views/Login'], resolve)
}
