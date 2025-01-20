'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('service_timetable', {
      id: {
        type: Sequelize.INTEGER,
        primarayKey: true,
        autoIncrement: true,
        allowNull: false
      },
      start_hour: {
        type: Sequelize.TIME,
        allowNull: false
      },
      end_hour: {
        type: Sequelize.TIME,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      barbershop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'barbershop',
          key: 'id'
        }
      }
      //PRECISA CRIAR A TABELA DIASEMANA PARA DEPOIS VINCULAR O idDiaSemana
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('service_timetable');
  }
};
