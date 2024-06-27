import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'db_eco_reporte', // Nombre de tu base de datos en MySQL
    port: 3306, // Puerto de MySQL
    logging: false // Desactiva los logs de Sequelize si es necesario
});

export default sequelize;
