import request from './request'

const isDev = import.meta.env.DEV;

export const api_login = (params) => {
  let result = {}
  let userType = 1;
  if (isDev) {
    result = new Promise((resolve, reject) => {
      if (params.user === 'admin') {
        userType = 999
      }
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            user: {
              userName: params.user,
              userType, // 999：管理员、1：普通用户
            }
          }
        })
      }, 800)
    })
  } else {
    result = request.post('', params)
  }
  return result
}