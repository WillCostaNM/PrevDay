import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    font-size: 45%;
    
    @media screen and (min-width: 768px){
      font-size: 54%;
    }
  }

  
  h1{
    font-size: 3.2rem;
  }
  h2{
    font-size: 2.6rem;
  }
  h3{
    font-size: 2.2rem;
  }
  h4{
    font-size: 2rem;
  }

  body{
    background: ${({theme})=>theme.colors.primary};
    color: ${({theme})=>theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
