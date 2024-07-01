import { Request, Response } from 'express';
import { UserService } from '../../application/services/UserService';
import { CreateUserDTO } from '../../application/dto/CreateUserDTO';

export class UserController {
    constructor(private authService: UserService) {}

    async register(req: Request, res: Response) {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const user = await this.authService.registerUser(createUserDTO);
            res.status(201).json(user);
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico
            res.status(400).json({ error: error.message });
        }
    }
}
