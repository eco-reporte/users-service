import { Request, Response } from 'express';
import { UserService } from '../../application/services/UserService';
import { CreateUserDTO } from '../../application/dto/CreateUserDTO';

export class UserController {
    constructor(private userService: UserService) {}

    async createUser(req: Request, res: Response) {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const user = await this.userService.createUser(createUserDTO);
            res.status(201).json(user);
        } catch (any) {
            res.status(400).json({ any });
        }
    }
}
