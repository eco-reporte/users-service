// src/infrastructure/database/sequelize.ts

import { Sequelize } from 'sequelize';
require('dotenv').config();

// Configuración de conexión a la base de datos MySQL
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT as any, // Selecciona el dialecto de la base de datos
  host: process.env.DB_HOST, // Dirección del servidor de la base de datos
  port: Number(process.env.DB_PORT), // Puerto del servidor de la base de datos
  username: process.env.DB_USERNAME, // Nombre de usuario para la conexión
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  database: process.env.DB_NAME, // Nombre de la base de datos
});

// Función para conectar a la base de datos y sincronizar modelos (opcional)
async function connectDatabase() {
  try {
    // Autenticar la conexión
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Sincronización de modelos (crea tablas si no existen)
    // Descomenta la línea siguiente si deseas que Sequelize sincronice automáticamente los modelos
    // await sequelize.sync();

    // Alternativamente, puedes sincronizar modelos individualmente si lo prefieres
    // await User.sync();
    // await OtherModel.sync();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Llama a la función para conectar a la base de datos
connectDatabase();

// Exporta la instancia de Sequelize configurada
export default sequelize;

