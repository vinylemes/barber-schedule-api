const {Customer} = require('../models/customer');

exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.send(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter cliente' });
  }
};

exports.getAllCustomersByBarbershopId = async (req, res) => {
    try {
      const { barbershop_id } = req.params;
      const customers = await Customer.findAll({ where: { barbershop_id } });
      res.send(customers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter clientes' });
    }
}

exports.createCustomer = async (req, res) => {
  try {
    const { barbershop_id, name, phone, email, cpf, birthdate, gender } = req.body;
    const customer = await Customer.create({ barbershop_id, name, phone, email, cpf, birthdate, gender });
    res.status(201).send(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, cpf, birthdate, gender } = req.body;
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await customer.update({ name, phone, email, cpf, birthdate, gender });
    res.send(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await customer.destroy();
    res.send({ message: 'Cliente removido com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao remover cliente' });
  }
};