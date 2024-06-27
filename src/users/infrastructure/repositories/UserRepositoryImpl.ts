
import { CreateUserDTO } from '../../application/dto/CreateUserDTO';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserModel } from '../orm/UserModel';

export class UserRepositoryImpl implements UserRepository {
    findUserByEmail(email: string): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
    async createUser(userDTO: CreateUserDTO): Promise<User> {
        const { name, email, password, role } = userDTO;

        // Asegúrate de que password sea un string definido
        const createdUser = await UserModel.create({
            name,
            email,
            password: password || '', // Ejemplo de manejo si password podría ser undefined
            role,
        });

        return createdUser;
    }
}
