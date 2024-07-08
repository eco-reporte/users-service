
import { CreateUserDTO } from '../../application/dto/CreateUserDTO';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserModel } from '../orm/UserModel';

export class UserRepositoryImpl implements UserRepository {

    async createUser(userDTO: CreateUserDTO): Promise<User> {
        const { name,lastName, email, password, role, gender, phone, code } = userDTO;

        // Asegúrate de que password sea un string definido
        const createdUser = await UserModel.create({
            name,
            lastName,
            email,
            password: password || '', // Ejemplo de manejo si password podría ser undefined
            role,
            gender,
            phone,
            code,
        });

        return createdUser;
    }

    async getUserById(id: number): Promise<User | null> {
        const user = await UserModel.findOne({ where: { id } });

        if (!user) {
            return null;
        }

        return user;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ where: { email } });

        if (!user) {
            return null;
        }
        
        return user;

    }

    async deleteUserById(id: number): Promise<boolean> {
        const deletedUser = await UserModel.destroy({ where: { id } });

        return deletedUser > 0;
    }

    async deleteUserByEmail(email: string): Promise<boolean> {
        const deletedUser = await UserModel.destroy({ where: { email } });

        return deletedUser > 0; //server delete
    }
}
