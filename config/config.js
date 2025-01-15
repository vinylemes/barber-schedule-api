require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'mydatabase',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: process.env.DATABASE_SSL_MODE === 'require',
        ca: process.env.DATABASE_CA_CERT,
      },
    },
  },
};
