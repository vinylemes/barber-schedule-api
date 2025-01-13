const {Sequelize, Datatypes} = require('sequelize');
const sequelize = require('../configs/db');

const Plan = sequelize.define(
  'Plan',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'plans',
    timestamps: true,
  }
);

module.exports = {Plan};