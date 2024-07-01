import { User } from '../entities/User';

export interface UserRepository {
    createUser(user: Partial<User>): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    deleteUserById(id: number): Promise<boolean>;
    deleteUserByEmail(email: string): Promise<boolean>;
}
