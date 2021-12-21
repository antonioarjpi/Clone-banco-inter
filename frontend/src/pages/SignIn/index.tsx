import { Wrapper, Background, ButtonContainer, InputContainer } from "./style";
import { useState } from "react";
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/logo-inter.svg'
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();
    const {userSignIn} = useAuth();

    const handleToSingIn = async () => {
        const data = {
            email, 
            password
        }

        try{
            const response = await userSignIn(data);

            if(response.id){
                navigate('/dashboard');
                return;
            }
            } catch(e) {
                setLoginError("E-mail ou senha inválida");
            
            }
        }      


    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter"/>
                <InputContainer>
                    <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {loginError && (                       
                                <p className="alert">{loginError}</p>
         
                        )}  
                </InputContainer>
                <ButtonContainer>
                    <Button type="button" onClick={handleToSingIn}>Entrar</Button>
                    <p>Ainda não tem cadastro? <Link to="/signup">Cadastre-se Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;