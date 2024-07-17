import express, {Application, Request, Response} from "express";
import bodyParser from 'body-parser';
import userRoutes from './users/interfaces/routes/UserRoutes';
import sequelize from './database/database';
import authRoutes from './auth/infraestructure/Routes/authRoutes';
import cors from 'cors';
import proxy from "express-http-proxy";
import {Signale} from "signale";
import morgan from "morgan";
import { authMiddleware } from './jwt/middleware/security'; // Importa el middleware de autenticación
import { createProxyMiddleware } from 'http-proxy-middleware';


const app:Application = express();
const signale = new Signale();

app.use(bodyParser.json());
app.use(cors()); // Add CORS middleware


app.use(morgan('dev'));
const PORT = process.env.PORT || 3001;
const GATEWAY = process.env.SERVICE_NAME;


app.use('/login', authRoutes);
app.use('/user', userRoutes);

app.use('/api/education/', authMiddleware, createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
}));

app.use('/api/community/', authMiddleware, proxy('http://localhost:3004'));


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port 3001');
    });
});
