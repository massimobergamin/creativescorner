const { pool } = require('./db');

const authMiddleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    const user = pool.query (`SELECT id FROM users WHERE id = '${uid}'`)
    if (!user) throw new Error();
    req.user = user;
    next();
      
  } catch (error) {
    return res.sendStatus(401);
  }
}

module.exports = authMiddleware;