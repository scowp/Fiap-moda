import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #202427;
    }

    * {
        list-style: none;
        text-decoration: none;
    }

    a:link, a:visited {
    text-decoration: none;
    color: #91a3ad;
    }

    a:active {
    text-decoration: none
    }

    h1 {
        text-align: center;
        color:#ed145b;
        margin-bottom: 50px;
        text-shadow: 0px 0px 10px 2px #151819;
    }
`;
 
export default GlobalStyle;