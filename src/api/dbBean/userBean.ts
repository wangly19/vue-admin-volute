class User {
  username: string
  password: string

  constructor (username: string = '', password: string = '') {
    this.username = username
    this.password = password
  }

  setUsername (username: string) {
    this.username = username
  }

  getUsername () {
    return this.username
  }

  setPassword (password: string) {
    this.password = password
  }

  getPassword () {
    return this.password
  }

  setUserModel (username: string, password: string) {
    this.username = username
    this.password = password
  }
}

export default User
