import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { AuthService } from '../../application/services/AuthService';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';
import { PasswordService } from '../../domain/services/PasswordService';
import { JwtService } from '../../infrastructure/security/JwtService';

const router = Router();
const userRepository = new UserRepositoryImpl();
const passwordService = new PasswordService();
const jwtService = new JwtService();
const authService = new AuthService(userRepository, passwordService, jwtService);
const authController = new AuthController(authService);

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

export default router;
