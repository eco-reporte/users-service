import { Request, Response } from "express";
import { GetUsersUseCase } from "../../appliaction/getUsersUseCase";

export class GetUsersController {

    constructor(readonly getUsersUseCase: GetUsersUseCase) {}

    async getUsers(req: Request, res: Response) {
        try {
            const getAll = await this.getUsersUseCase.run();

            if (getAll) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        list: getAll
                    }
                });
            } else {
                return res.status(204).send({
                    status: "ok",
                    message: "Content not found"
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An error occurred while listing the users."
            });
        }
    }
}
