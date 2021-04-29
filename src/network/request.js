import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '',
    timeout: 1000
  })

  // 2.axios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 作用：
    // 1.可以添加config中一些不符合服务器要求的数据 如：headers
    // 2.每次发送网络请求时，都希望界面中有加载动画
    // 3.登录请求携带token
    return config
  }, err => {  //请求失败的时候，一般很少用到
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
 }