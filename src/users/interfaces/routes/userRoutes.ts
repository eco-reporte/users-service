import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../../application/services/UserService';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';

const router = Router();
const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/create', (req, res) => userController.createUser(req, res));

export default router;
