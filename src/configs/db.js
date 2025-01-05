const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'mydatabase',
  process.env.DATABASE_USER || 'postgres',
  process.env.DATABASE_PASSWORD || 'postgres',
  {
    host: process.env.DATABASE_HOST || 'db',
    port: process.env.DATABASE_PORT || 5432, 
    dialect: 'postgres',
  }
);

module.exports = sequelize;