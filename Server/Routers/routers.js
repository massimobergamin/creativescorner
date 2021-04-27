const controllers = require('../Controllers/controllers')
const router = require('express').Router();
const authMiddleware = require('../Middleware/authmiddleware')

//Thread Routes
router.get('/threads', controllers.getThreads);
router.get('/thread/:id', controllers.getSelectedThread);
router.post('/post', controllers.postThread);
router.delete('/:id', controllers.deleteThread);

//Reply Routes
router.get('/replies', controllers.getReplies);
router.post('/reply', controllers.postReply);
router.delete('/:id', controllers.deleteReply);

//Register Route
router.post('/user/register', controllers.createUser);

//login Route
router.post('/user/login', controllers.login);

//PROFILE
router.get('/me', authMiddleware, controllers.profile);

//logout
router.post('/logout', controllers.logout);

module.exports = router;