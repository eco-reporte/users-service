import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './users/interfaces/routes/authRoutes';
import { sequelize } from './users/infrastructure/orm/sequelize';
import authRoutes from './auth/infraestructure/Routes/authRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/login', authRoutes);
app.use('/user', userRoutes); // Agrega las rutas del usuario

sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
});
