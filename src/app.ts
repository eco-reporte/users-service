import express from 'express';
import sequelize from './config/database';


const app = express();

// Sincronización de modelos con la base de datos
sequelize.sync({ force: false }) // Cambia a true si quieres forzar la sincronización y recreación de tablas
    .then(() => {
        console.log('Base de datos conectada y modelos sincronizados.');
    })
    .catch((error: any) => {
        console.error('Error al conectar y sincronizar la base de datos:', error);
    });

// Rutas y configuraciones de Express
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
