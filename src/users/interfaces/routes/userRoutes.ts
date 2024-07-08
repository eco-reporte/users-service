import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../../application/services/UserService';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';
import { PasswordService } from '../../domain/services/PasswordService';

const router = Router();
const userRepository = new UserRepositoryImpl();
const passwordService = new PasswordService();
const userService = new UserService(userRepository, passwordService);
const userController = new UserController(userService);

router.post('/register', (req, res) => userController.register(req, res));
router.get('/find/:id', (req, res) => userController.getUserById(req, res));
router.get('/find-email/:email', (req, res) => userController.getUserByEmail(req, res));
router.delete('/delete-user/:id', (req, res) => userController.deleteUserById(req, res));
router.delete('/delete-email/:email', (req, res) => userController.deleteUserByEmail(req, res));

export default router;