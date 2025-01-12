const express = require('express');
const barbershopController = require('../controllers/barbershopController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.get('/', barbershopController.getAllBarbershops);
router.get('/:id', barbershopController.getBarbershopById);
router.post('/', authenticateToken, barbershopController.createBarbershop);
router.put('/:id', authenticateToken, barbershopController.updateBarbershop);
router.delete('/:id', authenticateToken, barbershopController.deleteBarbershop);

module.exports = router;
