import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    width: 90rem ;
    margin-top: 2%;
    margin-left: 2%;
    padding: 2.5rem 1rem ;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #f12711 !important; /* fallback for old browsers */
 
    

    .card{
        width: 100%;
        //min-width: 70%;
        //border: solid 1px;
        border-radius: 20px;
        padding: 2rem;
        margin: 2rem;
        background-color: var(--card);
    }

    span{
        font-size: 80%;
    }

    .card> img{
        width: 100%;
    }

    @media (max-width: 1120px) {
    width: 50rem;
    margin-top: 2%;
    margin-left: 8%;
    padding: 3.5rem;
    border: solid 1px;
    display: block;
    .card{
        width: 80%;
        //border: solid 1px;
        //padding-left: 2rem;
        //margin: 2rem;
        background-color: var(--card);
    }
    .card > img{
        width: 70%;
    }

    }

`