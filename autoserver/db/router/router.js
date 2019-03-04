const router = require('express').Router();
const controller = require('../controller/controller')

router.get('/piece', controller.Pieces.get);

module.exports = router;