import { FooterContainer, SocialIcon, FooterWrapper } from "./styles";
import { useNavigate } from "react-router-dom";


import Github from '../../assets/images/footer/github_icon.png'
import Gmail from '../../assets/images/footer/gmail_icon.png'
import Whatsapp from '../../assets/images/footer/whatsapp_icon.png'
import Linkdin from '../../assets/images/footer/linkedin_icon.png'

const Footer = () =>{

    const navigate = useNavigate();

    const handleLogoff = () =>{
        navigate('/signin')
    }

    return (
        <FooterContainer>

            <FooterWrapper>
                <p>Banco Inter S.A. - Avenida Barbacena, 1219 - Santo Agostinho. CEP: 30190-924 - Belo Horizonte/MG<br/>Desenvolvido por: Antônio Araújo</p>       
                <SocialIcon><a href="https://github.com/antonioarjpi">
                    <img src={Github} alt="Github logo" width={50} height={50} /></a>
                    <a href="mailto:antonioarjpi@gmail.com?subject=Hello%20agin/">
                        <img src={Gmail} alt="Gmail logo" width={50} height={50}/></a>
                        <a href="https://www.linkedin.com/in/antonioarjpi/">
                        <img src={Linkdin} alt="Linkdin logo" width={50} height={50}/></a><a href="https://web.whatsapp.com/send?phone=5586994273871">
                        <img src={Whatsapp} alt="Whatsapp logo" width={50} height={50} /></a>
                    </SocialIcon>
            </FooterWrapper>
         
               
        </FooterContainer>
    )
}

export default Footer;