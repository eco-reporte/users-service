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

    async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.authService.getUserById(Number(id));
            res.status(200).json(user);
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico
            res.status(400).json({ error: error.message });
        }
    }

    async getUserByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const user = await this.authService.getUserByEmail(email);
            res.status(200).json(user);
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await this.authService.deleteUserById(Number(id));
            res.status(200).json({ deleted });
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUserByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const deleted = await this.authService.deleteUserByEmail(email);
            res.status(200).json({ deleted });
        } catch (error: any) { // Añadir ': any' para manejar el error como un tipo genérico.
            res.status(400).json({ error: error.message });
        }
    }
}
