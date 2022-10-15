import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;

    --blue:#5429CC;
    --blue-light:#6933ff;

    --green:#33CC95;
    --red: #E62E4D;

    --white: #FFFFFF;
    --white-800:#969CB3;

    --title:#363F5F;
    --text:#969CB3;
    
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size: 93.75%;//15px
    }
    @media(max-width:720px){
      font-size: 87.5%;//14px
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;

  }
/* parece que essas tags nao pegam a font que esta no body, mas acho que esta desatualizado, 
creio que pegam sim !pesquisar sobre*/

  body, input, button, textarea{
    font-family: 'Proppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`