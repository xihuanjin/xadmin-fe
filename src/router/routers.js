import Main from '@/views/main'


export default [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          hideInMenu: true
        },
        component: () => import('@/views/example/index.vue')
      }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/views/login/login.vue')
  }
]