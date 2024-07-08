import { Request, Response } from "express";
import { AuthUseCase } from "../../application/usecase/authUseCase";

export class AuthController {

    constructor(private useCase: AuthUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        const { email, password} = req.body;
        const authResponse = await this.useCase.run(email, password);

        if (authResponse.status === 'success') {
            const user = {
                email: authResponse.user?.email,
                role: authResponse.user?.role,
                name: authResponse.user?.name,
                lastName: authResponse.user?.lastName,
                gender: authResponse.user?.gender,
                phone: authResponse.user?.phone,
                code: authResponse.user?.code,
            };

            res.status(200).json({
                user, // Aquí se envía el objeto 'user' dentro del JSON de respuesta
                token: authResponse.token,
            });
        } else {
            res.status(401).json({
                message: authResponse.message,
            });
        }
    }
}