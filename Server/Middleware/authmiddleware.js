const { pool } = require('../db');

const authMiddleware = async (req, res, next) => {
  
  try {
    const { uid } = req.session;
    const user =  await pool.query (`SELECT * FROM users WHERE id = '${uid}'`)
    if (!user) throw new Error();
    console.log(user.rows)
    req.user = user.rows;
    next();
      
  } catch (error) {
    console.log(error)
    return res.sendStatus(401);
  }
}

module.exports = authMiddleware;