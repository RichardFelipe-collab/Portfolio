import styled from 'styled-components';

export const SkillDetails = styled.div`

width: 100%;
  padding: 1rem;
  background-color: var(--card);
  border-radius: 20px;
  margin-top: 30px;
  

  .skill {
   background-color: #0d1117;
   border-radius: 20px;
   width: 100%;
   padding: .5rem;
   font-size: .7rem;
   display: flex;
   align-items: center;
   gap: .2rem;
  }

  .skill > img {
    width: 25px;
  }

  

  .details{
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;

  }

  @media (max-width: 1190px) {
    .details{
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    }
  }





`