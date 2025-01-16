const Joi = require('joi');

const validateCustomer = (req, res, next) => {
  const schema = Joi.object({
    barbershop_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().optional(),
    cpf: Joi.string().optional(),
    birthdate: Joi.date().required(),
    gender: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = validateCustomer;
