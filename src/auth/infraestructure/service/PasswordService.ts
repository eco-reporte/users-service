import bcrypt from 'bcrypt';

export class PasswordService {
    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
