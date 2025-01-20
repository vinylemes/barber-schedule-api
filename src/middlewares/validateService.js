const Joi = require('joi');

const validateService = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(), // Campo opcional
    price: Joi.number().positive().required(), // Preço deve ser um número positivo
    isActive: Joi.boolean().optional(), // Campo opcional
    barbershop_id: Joi.number().integer().required(), // ID da barbearia é obrigatório
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = validateService;
