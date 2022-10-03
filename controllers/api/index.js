const router = require('express').Router();
const userRoutes = require('./user-routes.js');
router.use('/users', userRoutes);
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);

module.exports = router;