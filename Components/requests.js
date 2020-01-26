import axios from 'react-native-axios'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create(
  {
    baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/240551' : ''
  }
)
const service1 = axios.create(
  {
    baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/240551' : ''
  }
)

service.interceptors.request.use(
  (config) => {
    config.data = Object.assign({}, config.data, {
      authToken: 'asdfasdf'
    })
    return config
  }
)
service.interceptors.response.use(
  (resp) => {
    if (resp.data.code === 200) {
      return resp.data
    } else {
      // 全局显示错误
      // message.error(resp.data.errMsg)
      console.log('请求错误')
    }
  }
)

// 获取视频列表
export const getVideos = () => {
  return service.post('/api/v1/videos')
}
// 获取评论列表
export const getComments = () => {
  return service.post('/api/v1/commentList')
}
// 登录接口
export const loginRequest = () => {
  return service1.post('/api/v1/login/user')
}
// 登录接口
// export const loginRequest = (username = "0",password = "0", remember = true) => {
//   return service1.post('/api/v1/login',{username, password, remember})
// }
// export const loginRequest = ({ username, password, remember } = userInfo) => {
//   return service1.post('/api/v1/login', { username, password, remember })
// }