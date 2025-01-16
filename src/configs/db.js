const { Sequelize } = require('sequelize');

const environment = process.env.NODE_ENV || 'development';

const config = {
  development: {
    database: process.env.DATABASE_NAME || 'mydatabase',
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {},
  },
  staging: {
    database: process.env.DATABASE_NAME || 'stagingdb',
    username: process.env.DATABASE_USER || 'staginguser',
    password: process.env.DATABASE_PASSWORD || 'stagingpassword',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: process.env.DATABASE_SSL_MODE === 'require',
        rejectUnauthorized: false, // Ignora validação de certificado autoassinado
      },
    },
  },
};

const currentConfig = config[environment];

const sequelize = new Sequelize(
  currentConfig.database,
  currentConfig.username,
  currentConfig.password,
  {
    host: currentConfig.host,
    port: currentConfig.port,
    dialect: currentConfig.dialect,
    dialectOptions: currentConfig.dialectOptions,
  }
);

module.exports = sequelize;