import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './interfaces/routes/authRoutes';
import userRoutes from './interfaces/routes/userRoutes';
import { sequelize } from './infrastructure/orm/sequelize';

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes); // Agrega las rutas del usuario

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
