import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Card from '../../components/card'
import Input from '../../components/input'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/logo-inter.svg'
import { Background, ButtonContainer, InputContainer, Wrapper } from '../SignUp/style'
import api from '../../services/api'
import useAuth from '../../hooks/useAuth'

const SignUp = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {userSignUp} = useAuth();
    const navigate = useNavigate();

    const handleToSingUp = async() => {

        const data ={
            firstName,
            lastName,
            email,
            password
        }
        
            const response = await userSignUp(data);
            navigate('/');            
           
    }
    
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter"/>
                <InputContainer>
                    <Input placeholder="Nome" value={firstName} onChange={e => setfirstName(e.target.value)}/>
                    <Input placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
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