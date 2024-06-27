import { UserRepository } from '../../domain/repositories/UserRepository';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { LoginUserDTO } from '../dto/LoginUserDTO';
import { PasswordService } from '../../domain/services/PasswordService';
import { JwtService } from '../../infrastructure/security/JwtService';

export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private passwordService: PasswordService,
        private jwtService: JwtService
    ) {}

    async registerUser(createUserDTO: CreateUserDTO) {
        const hashedPassword = await this.passwordService.hashPassword(createUserDTO.password);
        const user = await this.userRepository.createUser({ ...createUserDTO, password: hashedPassword });
        return user;
    }

    async loginUser(loginUserDTO: LoginUserDTO) {
        const user = await this.userRepository.findUserByEmail(loginUserDTO.email);
        if (!user) throw new Error('User not found');

        const isPasswordValid = await this.passwordService.comparePassword(loginUserDTO.password, user.password);
        if (!isPasswordValid) throw new Error('Invalid credentials');

        const token = this.jwtService.generateToken(user);
        return token;
    }
}
