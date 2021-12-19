import { AxiosResponse } from "axios";
import { createContext, useState} from "react";

import { signin, signup, SignInData, SignUpData, me } from '../services/resources/user';

interface UserDTO{
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;
}

interface ContextData {
    user: UserDTO;
    userSignIn: (userData: SignInData) => Promise<UserDTO>;
    userSignUp: (userData: SignUpData) => Promise<UserDTO>;
    me: () => Promise<AxiosResponse<UserDTO>>;
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({children}) => {
    
    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    const userSignIn = async (userData: SignInData) =>{
        const {data} = await signin(userData);
        
        localStorage.setItem('@Inter:token', data.accessToken);
        
        if(data?.status === 'error'){
            return data;
        }

        if(data.accessToken){
        localStorage.setItem('@Inter:token', data.accessToken);
        }

        return await getCurrentUser();
    }

    const userSignUp = async (userData: SignUpData) =>{
        const {data} = await signup(userData);

        localStorage.setItem('@Inter:token', data.accessToken);

        return await getCurrentUser();
    
    }

    const getCurrentUser = async () => {
        const {data} = await me();
        setUser(data);
        return data as UserDTO;
    }

    return(
        <AuthContext.Provider value={{user, userSignIn, userSignUp, me}}>
            {children}
        </AuthContext.Provider>
    )
}