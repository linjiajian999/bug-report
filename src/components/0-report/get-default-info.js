export default function() {
  return {
    browser: '',
    description: {
      cause: '',
      description: '',
      expectation: '',
      isDuplicate: false,
      isKnowCause: false
    },
    info: {
      name: '',               // 项目名称
      url: '',                // 重现地址
      loginAccount: '',       // 登录账号
      password: ''            // 登录密码
    },
    source: {
      bugFrom: ''
    },
    step: {
      list: []
    }
  }
}
