import { request, Request, response, Response } from 'express';
import UserService from './user.service';
export class UserController{

    async signin(req: Request, res: Response){
        const {email, password} = req.body;
        const userService = new UserService();

        const user = await userService.signin({email, password});

        return res.status(200).send(user);

    }
    async signup(req: Request, res: Response){
        return res.send('Criando um usuário')
    }
}