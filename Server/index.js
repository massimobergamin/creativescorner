const express = require('express');
const app = express();
const port = 3050;
const router = require('./Routers/routers');
const cors = require('cors');

const session = require('express-session');

const passport = require('passport');

const initiliazePassport = require('./passportConfig');

initiliazePassport(passport);

const corsConfig = {
  // REMOVE-START
  origin: 'http://localhost:3000',
  credentials: true,
  // REMOVE-END
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(
  session({
    // the store property, if not specified, defaults to the in-memory store
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: 'secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2hr
      sameSite: true,
      httpOnly: false,
      // we would want to set secure=true in a production environment
      secure: false,
    },
  })
  );
  
app.use(router);
app.use(passport.initialize);
app.use(passport.session);

app.listen(port, () => console.log("Listening"));


app.post('/users/login')