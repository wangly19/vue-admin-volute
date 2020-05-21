import Layout from '@/layout'
export default {
  path: '/',
  name: '/',
  component: Layout,
  redirect: '/home',
  children: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/Home'], resolve)
    }
  ]
}
