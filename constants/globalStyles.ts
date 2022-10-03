import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        font-family: Lexend;
        min-height: 100vh;
        background-color: #FFFFFF;
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    button {
        font: inherit;
        border: none;  
        background-color: transparent;  

        &:hover {
            cursor: pointer;
        }

        &:focus {
            outline: none;
        }
    }

    
`;
