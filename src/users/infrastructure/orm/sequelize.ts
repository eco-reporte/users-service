import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('db_eco_reporte', 'root', '211218', {
    host: 'localhost',
    dialect: 'mysql',
});
