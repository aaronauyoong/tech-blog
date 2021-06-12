const router = require("express").Router();
const userRoutes = require('./userRoutes');
const post = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', post);
router.use('/comments', commentRoutes);

module.exports = router;
