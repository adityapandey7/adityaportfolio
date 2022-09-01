import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    margin:0 200px;
    background-color: whitesmoke;
    color:black;
    @media screen and (max-width: 1200px) {
    margin: 0 175px;
}
@media screen and (max-width: 1000px) {
    margin: 0 100px;
}
@media screen and (max-width: 800px) {
    margin: 0 50px;
}
@media screen and (max-width: 600px) {
    margin: 0 25px;
}
@media screen and (max-width: 400px) {
    margin: 0 10px;
}   

}

`;

export default GlobalStyle;
