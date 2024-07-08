import espress from 'express';
import { AuthController } from '../controller/authController';
import { AuthUseCase } from '../../application/usecase/authUseCase';
import { MysqlAuthRepository } from '../mysqlAuthRepo';

const authRepository = new MysqlAuthRepository();
const authUseCase = new AuthUseCase(authRepository);
const authController = new AuthController(authUseCase);

const router = espress.Router();

router.post('/auth', async (req, res) => {
    const response = await authController.run(req, res);
    res.json(response);
});

export default router;