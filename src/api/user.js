// import request from '@/utils/request'

export function login(data) {
  return new Promise((resolve) => {
    resolve({
      code: 20000,
      data: {
        token: 'admin-token',
      },
    })
  })
  // return request({
  //   url: '/vue-admin-template/user/login',
  //   method: 'post',
  //   data,
  // })
}

export function getInfo(token) {
  return new Promise((resolve) => {
    resolve({
      code: 20000,
      data: {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
      },
    })
  })
  // return request({
  //   url: '/vue-admin-template/user/info',
  //   method: 'get',
  //   params: { token },
  // })
}

export function logout() {
  return new Promise((resolve) => {
    resolve({
      code: 20000,
      data: 'success',
    })
  })
  // return request({
  //   url: '/vue-admin-template/user/logout',
  //   method: 'post',
  // })
}
