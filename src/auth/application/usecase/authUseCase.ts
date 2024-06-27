import { AuthRepository } from "../../domain/repository/authRepository";


type AuthRespose = {
    status: "success" | "error";
    email?: string;
    password?: string;
    message?: string;
}

export class AuthUseCase {
    constructor(private repository: AuthRepository) {}

    async run(email: string, password: string): Promise<AuthRespose> {
        const user = await this.repository.verifyUser(email, password);
        if (!user) {
            return {
                status: "error",
                message: "User not found",
            };
        }
        return {
            status: "success",
            email: user.email,
            password: user.password,
        };
    }
}