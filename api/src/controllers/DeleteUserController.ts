import { Request, Response } from "express";
import { database } from "../database";

export class DeleteUserController {
    
    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const user = await database.user.findUnique({where: {id: Number(id)}})
        
        if(!user) {
            return response.json({ message: "Erro"}).status(500)
        } else {
            await database.user.delete({
                where: {
                    id: Number(id)
                }
            })
            
            return response.json(`${user} was deleted from the database!`)
        } 

    }
}