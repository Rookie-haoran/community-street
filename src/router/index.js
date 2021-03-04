import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Login-ui/Register'
import Login from '@/views/Login-ui/Login'


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: {
      name: 'entrance'
    }
  },
  {
    path: '/',
    component: () => import('@/views/entrance/EntrancePage'),
    name: 'entrance'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/home',
    component: () => import('@/views/HomePage/Homepage'),
    name: 'home'
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile/Profile'),
    name: 'profile',
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/activityinfo',
    component: () => import('@/views/activityInfo/ActivityInfo'),
    name: 'activityinfo'
  },
  {
    path: '/society',
    component: () => import('@/views/society/Society'),
    name: 'society'
  },
  {
    path: '/societyInfo',
    component: () => import('@/views/societyInfo/SocietyInfo'),
    name: 'societyInfo'
  }
]

const router = new Router({
  routes,
  linkActiveClass: "",
  linkExactActiveClass: ""
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth && !localStorage.token) {
//     Vue.prototype.$message({
//       type: 'warning',
//       message: '请先登录'
//     });
//     next('/login')
//   }
//   next()
// })


// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');

//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && !localStorage.token) {
//     return next('/login');
//   }
//   next();
// })


export default router