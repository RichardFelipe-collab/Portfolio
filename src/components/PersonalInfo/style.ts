import styled from "styled-components";

export const ContainerLeft = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: var(--card);
  border-radius: 20px;
  margin-top: 30px;

  align-items: flex-start;
  .profile {
    width: 9rem;
    border-radius: 80px;
    margin-left: 20%;
  }

  span {
      font-size: 1.6rem;
  }

  .info{
    align-items: baseline;
    
  }
  
  a {
   display: flex;
   align-items: center;
   gap: 1rem;
   text-decoration: none;
  }

  .link{
    border: solid 1px;
  }

  @media (max-width: 1120px) {
    
  }
  
`;
