import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Login-ui/Register'
import Login from '@/views/Login-ui/Login'


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: 'login'
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: () => import('@/views/HomePage/Homepage')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile/Profile'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/profile/community',
    component: () => import('@/views/Profile/CommunityInfo')
  },
  {
    path: '/profile/myactivity',
    component: () => import('@/views/Profile/MyActivity')
  },
  {
    path: '/profile/friends',
    component: () => import('@/views/Profile/Friend')
  },
  {
    path: '/activityinfo',
    component: () => import('@/views/activityInfo/ActivityInfo')
  },
  {
    path: '/society',
    component: () => import('@/views/society/Society')
  },
  {
    path: '/societyInfo',
    component: () => import('@/views/societyInfo/SocietyInfo')
  }
]

const router = new Router({
  routes,
  mode: 'history',
  base: '/app/',
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

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.token) {
    return next('/login');
  }
  next();
})


export default router