import  { createGlobalStyle } from "styled-components";


export const EstiloGlobal = createGlobalStyle`

    :root{
        --background: #13131A;
        --blue-baby: #8FB2F5;
        --text-title: #BFBFD4;
        --text-body: #7F7F98;
        --text-body-blur:rgba(72, 72, 86, 0.5);
        --input-bg: #1E1E29;
        --shape: #ffffff;
    }

     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings:
            "wdth" 100,
            "YTLC" 500;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    html{
        

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }

    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
    
    [disable]  {
        opacity: 0.5;
        cursor: not-allowed;
    }

`;

