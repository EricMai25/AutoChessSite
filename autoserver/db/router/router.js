const router = require('express').Router();
const controller = require('../controller/controller')

router.get('/pieces', controller.Pieces.get);

module.exports = router;