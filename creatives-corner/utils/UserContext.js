class UserContext {
  
  constructor () {
    this.authenticated = false;
    this.user = {}
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated () {
   return this.authenticated
  }

  loggedUser() {
    return this.user;
  }



}

export default new UserContext();