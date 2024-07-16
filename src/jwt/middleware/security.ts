    // middleware/authMiddleware.ts
    import { Request, Response, NextFunction } from 'express';
    import jwt from 'jsonwebtoken';
    import { JWT_SECRET } from '../config/secret'; // Asegúrate de tener una configuración adecuada para el secreto del JWT

    export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
        // Obtener el token del encabezado de autorización
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Verificar y decodificar el token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            
            // Si el token es válido, añadir los datos decodificados al objeto de solicitud para uso posterior
            (req as any).user = decoded;
            next();
        });
    };
