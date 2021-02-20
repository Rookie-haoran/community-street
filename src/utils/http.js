import axios from 'axios'
import Vue from 'vue'
import router from '../router'
const http = axios.create({
  baseUrl: '',
  timeout: 5000
})

// 拦截器
http.interceptors.request.use((config) => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer' + localStorage.token
  }
  return config
})

http.interceptors.response.use((res) => {
  return res
}, (err) => {
  // 服务器无响应
  if (!err.response) {
    Vue.prototype.$message.error({
      type: 'error',
      message: '服务器连接失败'
    });
    return Promise.reject(err)
  }
  // 服务器返回错误通用处理方案
  if (err.response.data.message) {
    Vue.prototype.$message.error({
      type: 'error',
      message: err.response.data.message
    });
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

export default http