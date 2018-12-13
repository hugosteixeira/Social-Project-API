const express = require('express');
const router = express.Router();
const controller = require('../controllers/socialProjectController')
router.get('/',controller.getRegisters)
router.get('/:id',controller.show)
router.post('/', controller.store);
router.put('/:id', controller.update)
router.delete('/:id', controller.delete);
module.exports = router;

