import jwt from 'jsonwebtoken';

const secretKey = 'LKDASKDNASKD'; // Clave secreta para firmar el token

export class TokenService {
    static generateToken(payload: any): string {
        return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Genera el token con expiración de 1 hora
    }

    static verifyToken(token: string): any {
        try {
            return jwt.verify(token, secretKey); // Verifica y decodifica el token
        } catch (error) {
            console.error('Error verifying token:', error);
            return null;
        }
    }
}
