const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/postRoutes', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;