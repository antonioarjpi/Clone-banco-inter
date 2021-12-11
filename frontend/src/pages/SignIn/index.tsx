import { Wrapper, Background, ButtonContainer, InputContainer } from "./style";
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/logo-inter.svg'
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link, useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const handleToSingIn = () => {
        navigate('/dashboard')
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="EMAIL"/>
                    <Input placeholder="SENHA" type="password"/>
                </InputContainer>
                <ButtonContainer>
                    <Button type="button" onClick={handleToSingIn}>ENTRAR</Button>
                    <p>Ainda não tem cadastro? <Link to="/signup">Cadastre-se Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;