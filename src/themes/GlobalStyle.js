import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Jim+Nightshade&display=swap&subset=latin-ext');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Jim Nightshade', cursive;
  }
   
  body {
    margin: 0;
    padding: 0;
    background-color: #E0E9F9
  }
`;

export default GlobalStyle;
