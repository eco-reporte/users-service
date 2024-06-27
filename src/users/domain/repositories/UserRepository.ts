import { User } from '../entities/User';

export interface UserRepository {
    createUser(user: Partial<User>): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
}
