const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const Barbershop = sequelize.define(
  'Barbershop',
  {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whatsapp:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      complement:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
  },
  {
    tableName: 'barbershop',
    timestamps: true,
  }
);

module.exports = {Barbershop};