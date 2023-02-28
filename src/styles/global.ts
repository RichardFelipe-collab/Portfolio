import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #0d1117;
        --blue: #0057ff;
        --card:#161b22;
    }

    *{
        box-sizing: border-box;  
        color: white; 
        font-family: 'Inter';
        
    }

    body{
        flex-direction: row;
        background-color: var(--background);
        -webkit-font-smoothing:antialiased;-webkit-font-smoothing:antialiased;
    }

    .container{
        display: flex;
        flex-direction: row;
        padding-left: 1rem;
        
    }

    .aside{
        width: 30%;   //min-width: 15%;
    }
    .projects{
        width: 10rem;
    }

    @media (max-width: 900px) {
        .container{
            width: 25rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        
        
    }
    .aside{
        width: 25rem;
        //margin: 0 auto;  
    }
    }



    


   
    

    


`;
