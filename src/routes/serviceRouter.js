const express = require('express');
const serviceController = require('../controllers/serviceController');
const authenticateToken = require('../middlewares/auth');
const validateService = require('../middlewares/validateService');
const router = express.Router();

// Rotas para serviços
router.get('/barbershop/:barbershop_id', authenticateToken, serviceController.getAllServicesByBarbershopId);  
router.get('/:id', serviceController.getServiceById);  
router.get('/', serviceController.getAllServices);  
router.post('/', authenticateToken, validateService, serviceController.createService);  
router.put('/:id', authenticateToken, serviceController.updateService);  
router.delete('/:id', authenticateToken, serviceController.deleteService);  

module.exports = router;
