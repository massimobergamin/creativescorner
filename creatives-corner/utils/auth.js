class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

/* 
this.authenticated starts off as false
login() turns this.authenticated to true
isAuthenticated() returns this.authenticated showing either false or true
*/

export default new Auth();