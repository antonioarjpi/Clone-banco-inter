import { FooterContainer, FooterWrapper } from "./styles";
import ImgFooter from '../../assets/images/img-footer.png'
import Github from '../../assets/images/footer/github_icon.png'
import Gmail from '../../assets/images/footer/gmail_icon.png'
import Whatsapp from '../../assets/images/footer/whatsapp_icon.png'
import Linkdin from '../../assets/images/footer/linkedin_icon.png'

const Footer = () =>{
    return (
        <FooterContainer>
            <FooterWrapper>
            <img src={ImgFooter} height={312}  alt="logo inter" />
            <div>
                    <p className="font-bold title-footer">Fale com a gente</p>
                    <span className="font-footer-f">Capitais e regiões metropolitanas</span><p className="font-bold" >3003 4070</p>
                    <span className="font-footer-f">Demais localidades</span><p className="font-bold" >0800 940 0007</p>
                    <span className="font-footer-f">SAC (24 horas)</span><p className="font-bold" >0800 940 9999</p>
                    <span className="font-footer-f">Deficiente de fala e audição</span><p className="font-bold" >0800 979 7099</p>
                    <span className="font-footer-f">Ouvidoria</span><p className="font-bold" >0800 940 7772</p>
                    <span className="font-footer-f">Não ligamos pra você por esses telefones.<br/> Também não solicitamos dados pessoais,.<br/>senha da conta, código de transação por<br/> telefone. Estes números são apenas para <br/>você fazer ligações para o Inter.</span>
                </div>    
                
                <div>
                    <p className="font-bold title-footer">Pra você</p>
                    <a href="https://www.bancointer.com.br/pra-voce/conta-digital/pessoa-fisica/"className="font-footer">Conta Digital Pessoa Física</a><br/>
                    <a href="https://www.bancointer.com.br/empresas/conta-digital/pessoa-juridica/"className="font-footer">Conta Digital Pessoa Jurídica</a> <br/> 
                    <a href="https://www.bancointer.com.br/empresas/conta-digital/mei/" className="font-footer">Conta Digital MEI</a><br/> 
                    <a href="https://www.bancointer.com.br/emprestimos/" className="font-footer">Empréstimos</a><br/> 
                    <a href="https://www.bancointer.com.br/operacoes/" className="font-footer">Operações</a><br/> 
                    <a href="https://www.bancointer.com.br/pra-voce/investimentos/" className="font-footer">Investimentos</a><br/> 
                    <a href="https://shopping.bancointer.com.br/?_ga=2.167102845.2120435948.1639444718-1544870906.1638655624" className="font-footer">Inter Shop</a><br/> 
                    <a href="https://www.bancointer.com.br/seguros/" className="font-footer">Seguros</a><br/> 
                    <a href="https://www.bancointer.com.br/orangefriday/" className="font-footer">Orange friday</a><br/>
                    <a href="https://www.bancointer.com.br/super-app-inter/" className="font-footer">SuperApp</a><br/> 

                </div>
                
                <div>
                    <p className="font-bold title-footer">Precisa de ajuda?</p>
                    <a href="https://ajuda.bancointer.com.br/?_ga=2.258450889.2120435948.1639444718-1544870906.1638655624" className="font-footer">Central de ajuda</a><br/>
                    <a href="https://www.bancointer.com.br/canais-de-atendimento/" className="font-footer font-footer">Canais de atendimento</a><br/>  
                    <a href="https://www.bancointer.com.br/ouvidoria/" className="font-footer ">Canais de atendimento</a><br/> 
                    <a href="https://www.bancointer.com.br/operacoes/" className="font-footer">Ouvidoria</a><br/> 
                    <a href="https://www.bancointer.com.br/operacoes/" className="font-footer">Operações</a><br/> 
                    <a href="https://www.bancointer.com.br/conta-digital/porque-nao-cobramos-tarifas/" className="font-footer">Por não cobramos tarifa</a><br/>
                    <a href="https://www.bancointer.com.br/segunda-via-boleto/" className="font-footer">2ª via do boleto</a><br/> 
                    <a href="https://www.bancointer.com.br/saldo-devedor/" className="font-footer">Saldo devedor</a><br/> 
                    <a href="https://www.bancointer.com.br/negocie/" className="font-footer">Negocie sua divida</a><br/> 
                    <a href="https://scci.bancointer.com.br/scciweb/?_ga=2.57065705.2120435948.1639444718-1544870906.1638655624" className="font-footer">Informe de rendimentos</a> 
                </div>
                
                <div>     
                    <p className="font-bold title-footer">Minhas redes</p>
                    <a href="https://github.com/antonioarjpi">
                    <img src={Github} alt="Github logo" className="fa" /></a>
                    <a href="mailto:antonioarjpi@gmail.com?subject=Hello%20agin/">
                     <img src={Gmail} alt="Gmail logo" className="fa"/></a>
                    <a href="https://www.linkedin.com/in/antonioarjpi/">
                    <img src={Linkdin} alt="Linkdin logo" className="fa"/></a>
                    <a href="https://web.whatsapp.com/send?phone=5586994273871">
                    <img src={Whatsapp} alt="Whatsapp logo" className="fa"/></a> 
                </div>
              
            </FooterWrapper>
 
        </FooterContainer>
    )
}

export default Footer;