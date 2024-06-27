import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('db_eco_reporte', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
