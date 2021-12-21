
import Header from '../../components/header'
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from './style'
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button'
import Statement from './Statement'
import Footer from '../../components/footer'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'
import { pay, request} from '../../services/resources/pix'


const Dashboard = () => {
    const {user, getCurrentUser} = useAuth();
    const wallet = user?.wallet || 0;

    const [key, setKey] = useState('');
    const [generatedKey, setGeneratedKey] = useState('');
    const [value, setValue] = useState('');
    const [pixError, setPixError] = useState('');

    const handleNewPayment = async () => {
        
        const {data} = await request(Number(value));

        if(data.copyPasteKey) {
            setGeneratedKey(data.copyPasteKey)
        }
    }

    const handlePayPix = async () => {
        try {
            const {data} = await pay(key)

            if(data.mag) {
                setPixError(data.mag);
                return;
            }

        } catch(e) {
            setPixError("Não foi possível fazer esse pagamento");
        }
    }

    useEffect(() =>{
        getCurrentUser();
    }, []);

    if(!user) {
        return null;
    }

    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card width="90%">
                        <InlineTitle>
                            <h2 className="h2">Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                            </h3>
                        </InlineContainer>
                    </Card>

                    <Card width="90%">
                        <InlineTitle>
                            <h2 className="h2">Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} value={value} onChange={e => setValue(e.target.value)} placeholder="Valor" />
                            <Button onClick={handleNewPayment}>Gerar Código</Button>
                        </InlineContainer>
                        {generatedKey && (
                            <>
                                <p className="primary-color ">PIX copia e cola</p>
                                <p className="primary-color">{generatedKey}</p>
                            </>
                        )}
                    </Card>

                    <Card width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} value={key} onChange={e => setKey(e.target.value)} placeholder="Insira a chave" />
                            <Button onClick={handlePayPix}>Pagar PIX</Button>
                        </InlineContainer>
                        {pixError &&
                                <p className='alert'>{pixError}</p>
                            }
                    </Card>
                </div>
                <div>
                    <Card width="90%">
                        <InlineTitle>
                            <h2 className="h2">Extrato da Conta</h2>
                        </InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </BodyContainer>    
            <Footer/>

        </DashboardBackground>
       
    )
}

export default Dashboard