const { Service } = require('../models/service');
const { Barbershop } = require('../models/barbershop');
const Sequelize = require('sequelize');

exports.getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    res.send(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter serviço' });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.send(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter serviços' });
  }
};

exports.getAllServicesByBarbershopId = async (req, res) => {
  try {
    const { barbershop_id } = req.params; // Obtém o ID da barbearia a partir dos parâmetros da URL
    const services = await Service.findAll({ where: { barbershop_id, isActive: true } });
    res.send(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter serviços' });
  }
};

exports.createService = async (req, res) => {
  try {
    const { barbershop_id, name, description, price, isActive } = req.body; // barbershop_id agora vem do corpo
    const service = await Service.create({ barbershop_id, name, description, price, isActive });
    res.status(201).send(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar serviço' });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, isActive } = req.body;
    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    await service.update({ name, description, price, isActive });
    res.send(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar serviço' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    await service.destroy();
    res.send({ message: 'Serviço removido com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao remover serviço' });
  }
};
