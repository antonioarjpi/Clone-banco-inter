
import Header from '../../components/header'
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from './style'
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button'
import Statement from './Statement'
import Footer from '../../components/footer'
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const {user, getCurrentUser} = useAuth();
    const wallet = user?.wallet || 0;
    
    useEffect(() => {
        getCurrentUser()
    }, [])

    if(!user){
        return null;
    }

    return (
        <DashboardBackground>
            <Header/>
            <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
                        </h3>
                        </InlineContainer>
                    </Card>
                    <Card noShadow={false} width="90%">
                        <InlineTitle>
                            <h2 className="h2">Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input placeholder="Valor a receber"/>
                            <Button>Gerar código</Button>
                        </InlineContainer>
                        <p>Copiar chave pix</p>
                        <p className="primary-color">asd21sadasd16511231919asd</p>
                    </Card>
                    <Card noShadow={false} width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input placeholder="Insira a chave"/>
                            <Button>Gerar código</Button>
                        </InlineContainer>
                    </Card>
                </div>
                <div>
                <Card noShadow width="90%">
                    <InlineTitle>
                        <h2 className="h2">Extrato da Conta</h2>
                    </InlineTitle>
                    <Statement/>
                </Card>
                </div>
            </BodyContainer>
            <Footer/>
            </DashboardBackground>
           

    )
}

export default Dashboard