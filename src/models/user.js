const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db');
const bcrypt = require('bcrypt');

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Adiciona unicidade ao email
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'users', // Define o nome da tabela
    timestamps: true, // Habilita createdAt e updatedAt
  }
);

// Hook para criptografar a senha antes de criar o usuário
User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = User;
