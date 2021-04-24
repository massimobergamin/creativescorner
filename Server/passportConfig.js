const LocalStrategy = require('passport-local').Strategy;
const { pool } = require('./db');
const bcrypt = require('bcrypt');



function initialize (passport) {

  const authenticateUser = (email, userPassword, done) => {
    pool.query (`SELECT DISTINCT email FROM users WHERE email = '${email}'`, (err, results) => {
      if(err) {
        throw err;
      }

      console.log(results.rows);

      if (results.rows.length > 0) {
        const user = results.rows[0];

        bcrypt.compare(userPassword, user.userPassword, (err, isMatch) => {
          if (err) {
            throw err
          }
          else if (isMatch) {
            return done(null, user);
          }
          else {
            return done(null, false, {message: "Password is not correct"})
          }
        })
      }
      else {
        return done(null, false, {message: "Email is not registered"})
      }
    })
  }

  passport.use(new LocalStrategy ({
      usernameField: "email",
      passwordField: "userPassword"
    }, authenticateUser)
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    pool.query(`SELECT * FROM users WHER id = ${id}`, (err, results) => {
      if (err) {
        throw err
      }
      return done(null, results.rows[0])
    })
  })
}

module.exports = initialize;