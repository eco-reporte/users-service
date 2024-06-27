import { Request } from "express";
import { AuthUseCase } from "../../application/usecase/authUseCase";

export class AuthController {

    constructor(private useCase: AuthUseCase) {}

    async run(req: Request) {
        const { email, password } = req.body;
        const authResponse = await this.useCase.run(email, password);
        return authResponse;
    }

}