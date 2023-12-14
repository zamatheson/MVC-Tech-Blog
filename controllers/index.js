const router = require('express').Router();
const apiRoutes = require('./apis');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/controllers', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/apis', apiRoutes);

module.exports = router;