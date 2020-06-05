import Axios from 'axios'

const env = process.env
console.log(env)

// 默认名称
const __baseOutTime = 5000
const __baseUrl = 'http://api.wangfanghua.top:7300/mock/5ed73f13216d1377dea9bedb/service'

// 创建axios实例
const httpServer = Axios.create({
  baseURL: __baseUrl,
  timeout: __baseOutTime
})

// 请求拦截器
httpServer.interceptors.request.use(
  request => {
    request.headers['X-Token'] = ''
    return request
  },
  error => {
    return error
  }
)
// 响应拦截器
httpServer.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const statusCode = error.response.status
    switch (statusCode) {
      case 400: error.message = '请求错误'; break
      case 401: error.message = '未授权，请登录'; break
      case 403: error.message = '拒绝访问'; break
      case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
      case 408: error.message = '请求超时'; break
      case 500: error.message = '服务器内部错误'; break
      case 501: error.message = '服务未实现'; break
      case 502: error.message = '网关错误'; break
      case 503: error.message = '服务不可用'; break
      case 504: error.message = '网关超时'; break
      case 505: error.message = 'HTTP版本不受支持'; break
      default: error.message = '未知错误'; break
    }
    return Promise.reject(error)
  }
)

export default httpServer
