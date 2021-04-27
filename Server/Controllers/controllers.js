const { pool } = require('../db');
const models = require('../Models/models');
const bcrypt = require('bcrypt');


//Thread Topic Controllers
exports.getThreads = async (req, res) => {
  try {
    const threads = await models.getThreads();
    res.status(200);
    res.send(threads);
  } catch (error) {
    res.status(500);
  }
};

exports.getSelectedThread = async (req, res) => {
  try {
    const thread = await models.getSelectedThread(req.params.id);
    res.status(200);
    res.send(thread);
  } catch (error) {
    res.status(500);
  }
}

exports.postThread = async (req, res) => {
  try {
    const newThread = await pool.query(`INSERT INTO topic_temp (title, genre, content, username) 
    VALUES ('${req.body.title}', '${req.body.genre}', '${req.body.content}', '${req.body.user}' ) RETURNING *`);
    res.status(200);
    res.send(newThread.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.deleteThread = (req, res) => {
  try {
    const { id } = req.params;
    models.deleteThread(id);
    res.status(200);
    res.send("Your thread has been deleted");
  } catch (error) {
    res.sendStatus(500);
  }
};

//Reply Controllers
exports.getReplies = async (req, res) => {
  try {
    const replies = await models.getReplies();
    res.status(200);
    res.send(replies);
  } catch (error) {
    res.status(500);
  }
};

exports.postReply = async (req, res) => {
  try {
    const newReply = await pool.query(`INSERT INTO replies_temp (topicID, content) 
    VALUES ('${req.body.topicid}', '${req.body.content}' ) RETURNING *`);
    res.status(200);
    console.log(newReply.rows);
    res.send(newReply.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.deleteReply = (req, res) => {
  try {
    const { id } = req.params;
    models.deleteReply(id);
    res.status(200);
    res.send("Replies deleted");
  } catch (error) {
    res.sendStatus(500);
  }
};

//Register Controller
exports.createUser = async (req, res) => {
  const { name, email, userPassword } = req.body;
  const user = await pool.query(`SELECT DISTINCT email FROM users WHERE email = '${email}'`);
  if (user.rows.length)
    return res
    .status(409)
    .send({ error: '409', message: 'User with email already exists'});
  try {
    let hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUser = await pool.query(`INSERT INTO users (name, email, password)
    VALUES ('${name}', '${email}', '${hashedPassword}')`)
    console.log("newUSer")
    console.log(newUser)
    req.session.uid = user.rows[0].id;
    res.status(200);
    res.send(newUser);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
}

//Login User
exports.login = async (req, res) => {
  try {
    const { email, userPassword } = req.body;
    const user = await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
    const validatedPass = await bcrypt.compare(userPassword, user.rows[0].password);
    if (!validatedPass) throw new Error();
    req.session.uid = user.rows[0].id;
    res.status(200).send(user.rows);
  } catch (error) {
    res
    .status(401)
    .send({ error: '401', message: 'Username or password is incorrect'})
  }
}

//persist
exports.profile = async (req, res) => {
  // REMOVE-START
  try {
    console.log('profile')
    console.log(req.user)
    const { id, name, email } = await req.user[0];
    const user = { id, name, email };
    console.log(user)
    res.status(200).send(user);
  } catch {
    res.status(404).send({ error, message: 'User not found' });
  }
  // REMOVE-END
};

exports.logout = (req, res) => {
  
  req.session.destroy((error) => {
    if (error) {
      res
      .status(500)
      .send({ error, message: 'Could not log out, please try again'})
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  })
}