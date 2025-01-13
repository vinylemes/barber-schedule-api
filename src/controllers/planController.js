const { Plan } = require('../models/plan');

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.findAll();
    res.send(plans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter planos' });
  }
};

exports.getPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: 'Plano não encontrado' });
    }
    res.send(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter plano' });
  }
};  

exports.createPlan = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const plan = await Plan.create({ name, price, description });
    res.status(201).json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar plano' });
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: 'Plano não encontrado' });
    }
    await plan.update({ name, price, description });
    res.send(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar plano' });
  }
}; 

exports.deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: 'Plano não encontrado' });
    }
    await plan.destroy();
    res.send({ message: 'Plano removido com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao remover plano' });
  }
};
