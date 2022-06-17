import axios from "axios";
import { ElMessage as Message } from 'element-plus'


const request = axios.create({
  baseURL: '',
  timeout: 1000 * 2,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use((res) => {
  const { success, code, message, data } = res.data // 将需要的数据和报错信息拆分开
  if (success) {
    return data
  }
  Message.error(message)
})

export default request;