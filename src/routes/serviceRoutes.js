const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware de autenticação

router.use(authMiddleware);

// Rotas
router.post('/', serviceController.create); // Criar serviço para o usuário autenticado
router.get('/', serviceController.findAll); // Listar todos os serviços do usuário autenticado
router.get('/:id', serviceController.findById); // Buscar um serviço específico do usuário autenticado
router.put('/:id', serviceController.update); // Atualizar um serviço específico do usuário autenticado
router.delete('/:id', serviceController.delete); // Desativar um serviço específico do usuário autenticado
router.get('/search', serviceController.searchByName); // Buscar serviços pelo nome

module.exports = router;
