const express = require('express');
const app = express();
const port = 3050;
const router = require('./Routers/routers');
const cors = require('cors');

const session = require('express-session');

const passport = require('passport');

const initiliazePassport = require('./passportConfig');

initiliazePassport(passport);

app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  session({
    // the store property, if not specified, defaults to the in-memory store
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: 'secret',
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      // we would want to set secure=true in a production environment
      secure: false,
    },
  })
);

app.use(passport.initialize);
app.use(passport.session);

app.listen(port, () => console.log("Listening"));


app.post('/users/login')