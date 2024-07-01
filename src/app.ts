import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './users/interfaces/routes/UserRoutes';
import { sequelize } from './users/infrastructure/orm/sequelize';
import authRoutes from './auth/infraestructure/Routes/authRoutes';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Add CORS middleware

app.use('/login', authRoutes);
app.use('/user', userRoutes);

sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
});
