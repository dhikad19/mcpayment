import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    --white-color: #ffffff;
    --black-color: #000000;
    --yellow-color: #fbac18;
    --blue-color: #112c4a;
    --light-blue-color: #112c4ae7;
    --red-color: #fe0000;
    --grey-color: #808080;
    --lightgrey-color: #d3d3d3;
    --title-size: clamp(2rem, 10vw, 4rem);
    --desc-size: clamp(0.7rem, 5vw, 2rem);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: var(--blue-color);
}

body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: var(--blue-color);
}

body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: var(--lightgrey-color);
}
`

export default GlobalStyle;