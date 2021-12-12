import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Card from '../../components/card'
import Input from '../../components/input'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/logo-inter.svg'
import { Background, ButtonContainer, InputContainer, Wrapper } from '../SignUp/style'

const SignUp = () => {
    const navigate = useNavigate();

    const handleToSingUp = () => {
        navigate('/signin')
    }
    
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter"/>
                <InputContainer>
                    <Input placeholder="NOME"/>
                    <Input placeholder="SOBRENOME"/>
                    <Input placeholder="EMAIL"/>
                    <Input placeholder="SENHA" type="password"/>
                    <Input placeholder="CONFIRMAR SENHA" type="password"/>
                </InputContainer>
                <ButtonContainer>
                    <Button type="button" onClick={handleToSingUp}>CADASTRA-SE GRATUITAMENTE</Button>
                    <p>Já possui conta? <Link to="/">Entre já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp