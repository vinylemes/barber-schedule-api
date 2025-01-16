const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const Service = sequelize.define(
  'Service',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, 
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    barbershop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'barbershops', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    tableName: 'services',
    timestamps: true, 
  }
);

module.exports = { Service };
