const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authenticateToken, userController.getUser);
router.put('/change-password', authenticateToken, userController.updatePassword);
router.put('/update-profile', authenticateToken, userController.updateProfile);
router.delete('/:id', authenticateToken, userController.deleteUser);

module.exports = router;