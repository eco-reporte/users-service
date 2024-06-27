import { Request,Response } from "express";
import { GetUserUseCase } from "../../appliaction/getUserUseCase";

export class GetUserController {
    getUserUseCase: GetUserUseCase;

    constructor(readonly getUsersUseCase: GetUserUseCase) {
        this.getUserUseCase = getUsersUseCase;
    }

    async getByPublic(req: Request, res: Response) {
        try {
            let { id } = req.params;
            let userId = parseInt(id, 10); // Convertir el id a un número
    
            let user = await this.getUserUseCase.getUser(userId);
    
            if (user !== null && user !== undefined) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        message: user
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    message: "User not found."
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.startsWith('[')) {
                    return res.status(400).send({
                        status: "error",
                        message: "Validation failed",
                        errors: JSON.parse(error.message)
                    });
                }
            }
            return res.status(500).send({
                status: "error",
                message: "An error occurred while fetching the User."
            });
        }
    }
    
    
    
}

