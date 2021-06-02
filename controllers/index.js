const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// default route
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;