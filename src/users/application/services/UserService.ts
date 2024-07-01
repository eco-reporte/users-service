import { UserRepository } from '../../domain/repositories/UserRepository';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { PasswordService } from '../../domain/services/PasswordService';

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
}
