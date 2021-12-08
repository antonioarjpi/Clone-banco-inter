import { getRepository } from 'typeorm';
import { Users } from '../../entity/Users'
import md5 from 'crypto-js/md5'
import { UserSignIn } from './dto/user.signin.dto';
import { UserSignUp } from './dto/user.signup.dto';
import AppError from '../../shared/error/AppError';

export default class UserService{

    async signin(user: UserSignIn){
        const userRepository = getRepository(Users);
        const {email, password} = user;
        const passwordHash = md5(password).toString();

        const existUser = await userRepository.findOne({where: {email, password: passwordHash}})

        if(!existUser){
            throw new AppError('Usuário não encontrado', 401);
        }

        return existUser;

    }

    async signup(user: UserSignUp){
        
    }
}