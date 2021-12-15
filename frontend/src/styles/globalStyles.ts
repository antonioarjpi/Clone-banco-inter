import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  body {
      background-color: ${({theme}) => theme.colors.background};
  }
  input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  a {
    text-decoration: none;
    color: ${({theme})=> theme.colors.primary};
    &:hover {
      filter: opacity(0.8)
    }
  }

  .primary-color{
    color: ${({theme})=> theme.colors.primary};
  }
  .second-color{
    color: #fff;
  }
  .font-bold{
    font-weight: 700;
  }
  .font-footer{
    line-height: 20px;
    font-size: 0.7rem;
    color: #000;
    &:hover {
     color: #fff;
    } 
  }
  .font-footer-f{
    line-height: 20px;
    font-size: 0.7rem;
    color: #000;
  }

  .social{
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
   
  }

  .fa{
    font-size: 5px;
    margin-right: 1px;
    margin-left: 3px;
    color: #d0d0d0;
    height: 30px;
    width: 30px;
    text-align: center;
    text-decoration: none;
    transition:color 0.2s;   
  }


  .h2{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28px;
    color: #000000;
  }
  .title-footer{
    font-weight: 700;
    margin-bottom: 10px;
  }
  .wallet{
    font-weight: 500;
    color: ${({theme})=> theme.colors.primary};
    font-size: 2.5rem; //40px
    line-height: 47px;
  }
`

export default GlobalStyle