import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap&subset=latin-ext');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
   
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    background-color: #E0E9F9
  }
`;

export default GlobalStyle;
