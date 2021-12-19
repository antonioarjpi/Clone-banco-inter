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
        navigate('/')
    }
    
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter"/>
                <InputContainer>
                    <Input placeholder="Nome" />
                    <Input placeholder="Sobrenome" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" type="password" />
                    <Input placeholder="Confirmar Senha" type="password" />
                </InputContainer>
                <ButtonContainer>
                    <Button type="button" onClick={handleToSingUp}>Cadastra-se gratuitamente</Button>
                    <p>Já possui conta? <Link to="/">Entre já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp