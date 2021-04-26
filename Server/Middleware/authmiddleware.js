// REMOVE-START
const { pool } = reuire('../db.js')
// REMOVE-END

const authMiddleware = async (req, res, next) => {
  // REMOVE-START
  try {
    const { uid } = req.session;

    const user = await pool.query(`SELECT id FROM users WHERE id = '${uid}'`);
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    
    return res.sendStatus(401);
  }
  // REMOVE-END
};

module.exports = authMiddleware;