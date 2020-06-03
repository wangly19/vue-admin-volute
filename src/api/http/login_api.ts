import User from '../dbBean/userBean'

import httpServer from '../../plugin/axios'

class Login {
  user: User

  constructor (loginForm) {
    this.user = { ...loginForm }
  }

  loginAPI () {
    return httpServer({
      url: '/login',
      method: 'get',
      data: this.user
    })
  }
}

export default Login
