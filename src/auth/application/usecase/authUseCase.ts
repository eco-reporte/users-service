// src/application/usecase/AuthUseCase.ts
import { AuthRepository } from "../../domain/repository/authRepository";
import { TokenService } from "../..//infraestructure/service/tokenService";

type AuthResponse = {
    status: "success" | "error";
    user?: {
        email: string;
        role: string;
        name?: string;
        lastName?: string;
        gender?: string;
        phone?: string;
        code?: string;
    };
    token?: string;
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

            // Genera el token JWT
            const token = TokenService.generateToken({ email: user.email, role: user.role });

            // Devuelve un objeto de respuesta exitosa
            return {
                status: "success",
                user: {
                    email: user.email,
                    role: user.role,
                    name: user.name,
                    lastName: user.lastName,
                    gender: user.gender,
                    phone: user.phone,
                    code: user.code,
                },
                token,
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
