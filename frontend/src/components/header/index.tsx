import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import logoInter from '../../assets/images/logo-inter.svg'
import { useNavigate } from "react-router-dom";
import { CircleContainer } from "../userCircle/styles";
import useAuth from "../../hooks/useAuth";

const Header = () =>{

    const navigate = useNavigate();
    const { user } = useAuth();

    const initials = user.firstName.substr(0,1) + user.lastName.substr(0,1);

    const handleLogoff = () =>{
        navigate('/signin')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <a className="#" href="#"><img src={logoInter} width={172} height={61} alt="logo inter" /></a>
                <UserInfo>
                    <CircleContainer>{initials}</CircleContainer>
                    <div>
                        <p className="second-color">Olá. <span className="second-color font-bold">{user.firstName} {user.lastName} </span></p>
                        <strong className="second-color">{user.accountNumber}-{user.accountDigit}</strong><br/>
                        <a href="#" className="primary-color font-bold" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;