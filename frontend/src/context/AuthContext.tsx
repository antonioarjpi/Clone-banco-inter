import { createContext, useEffect, useState, useCallback } from "react";

import { signIn, signUp, SignInData, SignUpData, me } from '../services/resource/users';

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
    userSignIn: (userData: SignInData) => void;
    userSignUp: (userData: SignUpData) => void;
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({children}) => {
    
    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    const userSignIn = async (userData: SignInData) =>{
        const {data} = await signIn(userData);
        localStorage.setItem('@Inter:token', data.accessToken);
        
        if(data?.status == 'error'){
            return data;
        }

        if(data.accessToken){
        localStorage.setItem('@Inter:token', data.accessToken);
        }

        await getCurrentUser();
    }

    const userSignUp = async (userData: SignUpData) =>{
        const {data} = await signUp(userData);

        await getCurrentUser();
    
    }

    const getCurrentUser = async () => {
        const {data} = await me();
        setUser(data);
        return data;
    }

    return(
        <AuthContext.Provider value={{user, userSignIn, userSignUp}}>
            {children}
        </AuthContext.Provider>
    )
}