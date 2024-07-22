import { UserRepository } from '../../domain/repositories/UserRepository';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { PasswordService } from '../../domain/services/PasswordService';
import { User } from '../../domain/entities/User';

export class UserService {
    constructor(
        private userRepository: UserRepository,
        private passwordService: PasswordService,
    ) {}

    async registerUser(createUserDTO: CreateUserDTO) {
        const hashedPassword = await this.passwordService.hashPassword(createUserDTO.password);
        const user = await this.userRepository.createUser({ ...createUserDTO, password: hashedPassword });
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.getUserById(id);
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.getUserByEmail(email);
        return user;
    }

    async deleteUserById(id: number) {
        const deleted = await this.userRepository.deleteUserById(id);
        return deleted;
    }

    async deleteUserByEmail(email: string) {
        const deleted = await this.userRepository.deleteUserByEmail(email);
        return deleted;
    }

    async updateUserByEmail(email: string, user: Partial<User>) {
        const updatedUser = await this.userRepository.updateUserByEmail(email, user);
        return updatedUser;
    }
}
