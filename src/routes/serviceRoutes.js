const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/', serviceController.create);
router.get('/', serviceController.findAll);
router.get('/:id', serviceController.findById);
router.put('/:id', serviceController.update);
router.delete('/:id', serviceController.delete);
router.get('/search', serviceController.searchByName);

module.exports = router;