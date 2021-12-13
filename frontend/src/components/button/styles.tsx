import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 50px; 

    color: ${({theme}) => theme.colors.background};
    background: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    font-size: 18px;
    letter-spacing: .3px;
    outline: none;
    padding: 9px 20px 7px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    transition: all .5s ease;

    &:hover{
        filter: opacity(0.8)
    }

    &:disabled{
        filter: opacity(0.4)
    }
`