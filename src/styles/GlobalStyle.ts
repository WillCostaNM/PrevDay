import { createGlobalStyle } from "styled-components";
import {px2vw} from '../utils/px2vw';

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
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
  
/* 
  :root{
    font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
  } */

  body{
    background: ${({theme})=>theme.colors.primary};
    color: ${({theme})=>theme.colors.text};
  }
`;

export default GlobalStyle;
