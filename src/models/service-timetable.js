const {Sequelize, Datatypes} = require('sequelize');
const sequelize = require('../configs/db');

const Service_timetable = sequelize.define(
    'Service_timetable',
    {
        barbershop_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        //PRECISA CRIAR A TABELA DIASEMANA PARA DEPOIS VINCULAR O idDiaSemana
        start_hour: {
            type: Sequelize.TIME,
            allowNull: false
        },
        end_hour: {
            type: Sequelize.TIME,
            allowNull: false
        }
    },
    {
        tableName: 'service_timetable',
        timestamps: true,
    }
);

module.exports = {Service_timetable};