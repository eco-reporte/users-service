import { AuthRepository } from "../../domain/repository/authRepository";
import { Auth } from "../../domain/entities/auth"; // Asegúrate de importar la entidad Auth si es necesario

type AuthResponse = {
    status: "success" | "error";
    email?: string;
    message?: string;
}

export class AuthUseCase {
    constructor(private repository: AuthRepository) {}

    async run(email: string, password: string): Promise<AuthResponse> {
        try {
            // Verifica las credenciales del usuario a través del repositorio
            const user = await this.repository.verifyUser(email, password);

            if (!user) {
                return {
                    status: "error",
                    message: "User not found or invalid credentials",
                };
            }

            // Devuelve un objeto de respuesta exitosa sin incluir la contraseña
            return {
                status: "success",
                email: user.email,
            };
        } catch (error) {
            console.error('Error in AuthUseCase:', error);
            return {
                status: "error",
                message: "Internal server error",
            };
        }
    }
}
