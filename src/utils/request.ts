import axios from 'axios';
import { getToken } from '@/utils/cookies'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000 // request timeout
})

service.interceptors.request.use(
    (config) => {
        const path = config.data.substring(config.data.indexOf('.') + 1, config.data.lastIndexOf('"'))
        const arrPath = ['login']
        if(!arrPath.includes(path)){
            config.headers['Token'] = getToken()
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const data = response.data
        if (data.resultcode !== 0) {
          Message({ message: response.data.reason || 'Error', type: 'error', duration: 2 * 1000 })
          return Promise.reject(new Error(response.data.reason || 'Error'))
        } else {
          return data
        }
      },
      error => {
        Message({ message: error.reason, type: 'error', duration: 2 * 1000 })
        return Promise.reject(error)
      }
)
export default service