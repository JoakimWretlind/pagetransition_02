import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "argentumBlack";
  src: local("argentumBlack"), url('/fonts/ArgentumSans-Black.ttf') format("truetype");
}
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'lato', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    // remove scrollbar
    /* ::-webkit-scrollbar {
        display: none;
    } */
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;