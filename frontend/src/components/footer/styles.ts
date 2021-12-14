import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 90px;
    background: linear-gradient(183deg, rgb(255, 135, 0), rgb(255, 80, 15));
    display: flex;
    align-items: center;
    justify-content: center;   


`
export const FooterWrapper = styled.div`
    width: 90%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const SocialIcon = styled.div`
    margin-right: 15px;
    justify-content: flex-end;

    &:hover{
        display: inline-block;
        color: #ff8700;
        text-decoration: none;
    }
    
`


