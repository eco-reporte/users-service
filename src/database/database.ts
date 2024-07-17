// src/infrastructure/database/sequelize.ts

import { Sequelize } from 'sequelize';

// Configuración de conexión a la base de datos MySQL
const sequelize = new Sequelize({
  dialect: 'mysql',       // Selecciona el dialecto de la base de datos
  host: 'localhost',      // Dirección del servidor de la base de datos
  port: 3306,             // Puerto del servidor de la base de datos
  username: 'root', // Nombre de usuario para la conexión
  password: '211218', // Contraseña del usuario
  database: 'db_eco_reporte', // Nombre de la base de datos
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

