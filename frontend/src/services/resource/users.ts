import api from '../api';

interface SingInData{
    email: string;
    password: string;
}

interface SingUpData{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const signIn = async (data: SingInData ) => {
    const user = api.post('/user/singin', data)
}

export const me = async () => {
    const user = api.get('/user/singup')
}

export const signUp = async (data: SingUpData ) => {
    const user = api.post('/user/singup', data)
}



