import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    public async handle(request: Request, response: Response) {

        const { name, email } = request.body;

        try {
            const user = await database.user.create({
                data: {
                    name,
                    email
                }
            })
    
            return response.json(user).status(201)
        } catch (error) {
            return response.json({ message: "Não foi possível criar o usuário!"}).status(500)
        }
    }
}