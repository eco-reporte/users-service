import { UserRepository } from '../../domain/repositories/UserRepository';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { User } from '../../domain/entities/User';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const user = await this.userRepository.createUser(createUserDTO);
        return user;
    }
}
