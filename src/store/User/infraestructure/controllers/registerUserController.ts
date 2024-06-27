import { Request, Response } from "express";
import { RegisterUserUseCase } from "../../appliaction/registerUserUseCase";
import { User } from "../../domain/user";

export class RegisterUserController {
    RegisterUserUseCase!: RegisterUserUseCase;

    constructor(readonly registerUserUseCase: RegisterUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
    }

    async register(req: Request, res: Response) {
        try {
            const { id, name, lastname, phone, email, birthday, password } = req.body;

            const user: User = {
                id: id,
                name: name,
                lastname: lastname,
                phone: phone,
                email: email,
                birthday: birthday,
                password: password
            };

            const newUser = await this.registerUserUseCase.run(user);

            if (newUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        message: "User registered successfully",
                        user: newUser
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while registering the user."
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An error occurred while registering the user."
            });
        }
    }
}
