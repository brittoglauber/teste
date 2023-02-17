import { Request, Response } from "express";
import { database } from "../database";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email } = request.body;

        const newUser = await database.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name, 
                email
            }
        })

        return response.json(newUser)
    }
}