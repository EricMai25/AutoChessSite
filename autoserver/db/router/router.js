const router = require('express').Router();
const controller = require('../controller/controller')

router.get('/piece', controller.Pieces.get);
router.post('/piece', controller.Pieces.post )

module.exports = router;