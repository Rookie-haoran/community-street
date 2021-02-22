import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Login-ui/Register'
import Login from '@/views/Login-ui/Login'

const Homepage = () => import('@/views/HomePage/Homepage');
const Profile = () => import('@/views/Profile/Profile');
const CommunityInfo = () => import('@/views/Profile/CommunityInfo');
const MyActivity = () => import('@/views/Profile/MyActivity');
const Friends = () => import('@/views/Profile/Friend');

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
    component: Homepage
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/profile/community',
    component: CommunityInfo
  },
  {
    path: '/profile/myactivity',
    component: MyActivity
  },
  {
    path: '/profile/friends',
    component: Friends
  },
  {
    path: '/activityinfo',
    component: () => import('@/views/activityInfo/ActivityInfo')
  },
  {
    path: '/society',
    component: () => import('@/views/society/Society')
  }
]

const router = new Router({
  routes,
  mode: 'history',
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