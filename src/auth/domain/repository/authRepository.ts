import { Auth } from '../entities/auth';

export interface AuthRepository {
    verifyUser(email: string, password: string, role: string): Promise<Auth | null>;
}