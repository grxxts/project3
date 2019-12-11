const router = require('express').Router();

router.use('/auth', require('./auth.routes'))
router.use('/twitter', require('./twitter.routes'))

module.exports = router;