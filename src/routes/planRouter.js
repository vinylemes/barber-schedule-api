const express = require('express');
const planController = require('../controllers/planController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.get('/', planController.getAllPlans);
router.get('/:id', planController.getPlanById);
router.post('/', authenticateToken, planController.createPlan);
router.put('/:id', authenticateToken, planController.updatePlan);
router.delete('/:id', authenticateToken, planController.deletePlan);

module.exports = router;