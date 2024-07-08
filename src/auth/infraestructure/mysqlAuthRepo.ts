import { AuthRepository } from '../domain/repository/authRepository';
import { Auth } from '../domain/entities/auth';
import User from './service/sequelize'; // Importa el modelo Sequelize User
import { PasswordService } from './service/PasswordService';

export class MysqlAuthRepository implements AuthRepository {

    private passwordService: PasswordService;

    constructor() {
        this.passwordService = new PasswordService();
    }
    
    async verifyUser(email: string, password: string): Promise<Auth | null> {
        try {
            const user = await User.findOne({
                where: {
                    email,
                },
            });

            if (!user) {
                return null; // Usuario no encontrado
            }

            // Comparar la contraseña proporcionada con la contraseña almacenada encriptada
            const passwordMatch = await this.passwordService.comparePassword(password, user.password);

            if (!passwordMatch) {
                return null; // Contraseña incorrecta
            }

            // Retorna un objeto Auth con los datos del usuario autenticado
            return new Auth(user.email, user.password, user.role, user.name, user.lastName, user.gender, user.phone, user.code);
        } catch (error) {
            console.error('Error verifying user:', error);
            return null; // Manejo de errores, retorna null en caso de error
        }
    }
}