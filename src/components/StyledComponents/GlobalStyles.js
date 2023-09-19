import { createGlobalStyle } from "styled-components";



const GlobalStyles =  createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.colors.body};
    margin: 0;
    font-size: 1.15rem;
    color: hsl(192, 100%, 9%);
    
}


`

export default GlobalStyles;