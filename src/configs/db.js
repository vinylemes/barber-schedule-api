import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydatabase', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;