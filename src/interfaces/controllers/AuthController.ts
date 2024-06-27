import { Request, Response } from 'express';
import { AuthService } from '../../application/services/AuthService';
import { CreateUserDTO } from '../../application/dto/CreateUserDTO';
import { LoginUserDTO } from '../../application/dto/LoginUserDTO';

export class AuthController {
    constructor(private authService: AuthService) {}

    async register(req: Request, res: Response) {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const user = await this.authService.registerUser(createUserDTO);
            res.status(201).json(user);
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico
            res.status(400).json({ error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginUserDTO: LoginUserDTO = req.body;
            const token = await this.authService.loginUser(loginUserDTO);
            res.status(200).json({ token });
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico
            res.status(400).json({ error: error.message });
        }
    }
}
