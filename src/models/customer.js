const {Sequelize, Datatypes} = require('sequelize');
const sequelize = require('../configs/db');

const Customer = sequelize.define(
  'Customer',
  {
    barbershop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    birthdate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    tableName: 'customer',
    timestamps: true,
  }
);

module.exports = {Customer};