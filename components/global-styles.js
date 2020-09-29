import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        overflow:hidden;
        .ReactModal__Overlay{
            z-index:1200 !important;
        }
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'PT Serif', serif;
        font-weight: 700;
    }
    a{
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        font-weight:400;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    img{
        margin-bottom:0px;
    }
`;

export default GlobalStyle;