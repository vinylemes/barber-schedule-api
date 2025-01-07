const Service = require('../models/service');
const Sequelize = require('sequelize');

module.exports = {
  create: async (req, res) => {
    try {
      const service = await Service.create(req.body);
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const services = await Service.findAll({
        where: { isActive: true }
      });
      res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const service = await Service.findOne({
        where: { id: req.params.id, isActive: true }
      });
      if (service) {
        res.status(200).json(service);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const [updated] = await Service.update(req.body, {
        where: { id: req.params.id, isActive: true },
      });
      if (updated) {
        const updatedService = await Service.findByPk(req.params.id);
        res.status(200).json(updatedService);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const [updated] = await Service.update({ isActive: false }, {
        where: { id: req.params.id },
      });
      if (updated) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  searchByName: async (req, res) => {
    try {
      const { name } = req.query;
      if (!name) {
        return res.status(400).json({ error: 'Name query parameter is required' });
      }
      const services = await Service.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`
          },
          isActive: true
        }
      });
      res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};