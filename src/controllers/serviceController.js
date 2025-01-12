const { Service } = require('../models/service');
const { User } = require('../models/user'); // Importação adicional
const Sequelize = require('sequelize');

module.exports = {
  create: async (req, res) => {
    try {
      const userId = req.user.userId; // Obtém o ID do usuário autenticado
      const service = await Service.create({ ...req.body, userId }); // Associa o serviço ao usuário
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const userId = req.user.userId; // Obtém o ID do usuário autenticado
      const services = await Service.findAll({
        where: { userId, isActive: true }, // Filtra serviços pelo usuário autenticado
      });
      res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const userId = req.user.userId;
      const service = await Service.findOne({
        where: { id: req.params.id, userId, isActive: true }, // Filtra pelo ID e usuário
      });
      if (service) {
        res.status(200).json(service);
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const userId = req.user.userId;
      const [updated] = await Service.update(req.body, {
        where: { id: req.params.id, userId, isActive: true },
      });
      if (updated) {
        const updatedService = await Service.findByPk(req.params.id);
        res.status(200).json(updatedService);
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const userId = req.user.userId;
      const [updated] = await Service.update(
        { isActive: false },
        { where: { id: req.params.id, userId } }
      );
      if (updated) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  searchByName: async (req, res) => {
    try {
      const userId = req.user.userId;
      const { name } = req.query;
      if (!name) {
        return res.status(400).json({ error: 'Parâmetro name é obrigatório' });
      }
      const services = await Service.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`,
          },
          userId,
          isActive: true,
        },
      });
      res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
