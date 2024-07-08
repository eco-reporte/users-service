import { Auth } from '../entities/auth';

export interface AuthRepository {
    verifyUser(email: string, password: string): Promise<Auth | null>;
}