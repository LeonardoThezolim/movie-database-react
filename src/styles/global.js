import { createGlobalStyle } from "styled-components";
import { Colors } from "../variables";

const { gray900 } = Colors
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#root{
    min-height: 100%;
}
body {
    background-color: ${gray900};
}
body,input,textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
h1,h2,h3,h4,h5,p,span{
    color: ${gray900};
}

`