import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #0d1117;
        --blue: #0057ff;
        --card:#161b22;
    }

    *{
        box-sizing: border-box;
        
    }

    

    body{
        flex-direction: row;
        background-color: var(--background);
    }

    .container{
        display: flex;
        flex-direction: row;
    }

   
    

    


`