import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import logoInter from '../../assets/images/logo-inter.svg'
import { useNavigate } from "react-router-dom";
import { CircleContainer } from "../userCircle/styles";

const Header = () =>{

    const navigate = useNavigate();

    const handleLogoff = () =>{
        navigate('/signin')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                    <CircleContainer>PF</CircleContainer>
                    <div>
                        <p className="second-color">Olá. <span className="second-color font-bold">Antônio</span></p>
                        <strong className="second-color">221561-1</strong><br/>
                        <a href="#" className="primary-color font-bold" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;