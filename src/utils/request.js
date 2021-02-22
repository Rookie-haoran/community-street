import axios from 'axios';

export function request(config) {
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseUrl: '',
    timeout: 5000
  });

  // 2. 拦截器
  instance.interceptors.request.use(config => {
    // 每次请求都为http头增加Authorization字段，其内容为Token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = token;
    }
    return config;
  }, err => {
    return Promise.reject(err);
  });

  instance.interceptors.response.use(res => {
    let data = res.data;

    return Promise.reject(data);
  }, err => {
    return Promise.reject(err);
  })


  // 3. 发送真正的网络请求
  return instance(config);
}