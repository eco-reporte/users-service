import jwt from 'jsonwebtoken';

export class JwtService {
    private readonly secret: string = 'your-secret-key';

    generateToken(user: any): string {
        return jwt.sign({ id: user.id, email: user.email, role: user.role }, this.secret, { expiresIn: '1h' });
    }

    verifyToken(token: string): any {
        return jwt.verify(token, this.secret);
    }
}
