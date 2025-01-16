const express = require('express');
const customerController = require('../controllers/customerController');
const authenticateToken = require('../middlewares/auth');
const validateCustomer = require('../middlewares/validateCustomer');
const router = express.Router();

router.get('/barbershop/:barbershop_id', authenticateToken, customerController.getAllCustomersByBarbershopId);
router.get('/:id', customerController.getCustomerById);
router.post('/', authenticateToken, validateCustomer, customerController.createCustomer);
router.put('/:id', authenticateToken, customerController.updateCustomer);
router.delete('/:id', authenticateToken, customerController.deleteCustomer);

module.exports = router;