export default [
  {
    path: '/login',
    name: '/login',
    meta: {
      title: '登录',
      icon: '',
      isShow: false
    },
    component: resolve => require(['@/views/Login'], resolve)
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '错误',
      icon: '',
      isShow: false
    },
    component: resolve => require(['@/views/Error/404.vue'], resolve)
  }
]
