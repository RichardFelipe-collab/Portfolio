import styled from "styled-components";

export const ContainerLeft = styled.section`
  width: 35rem;
  height: 80rem;
  padding: 2rem;
  background-color: var(--card);
  border-radius: 20px;
  margin-top: 30px;

  align-items: flex-start;
  .profile {
    width: 9rem;
    border-radius: 80px;
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
   gap: 2rem;
   text-decoration: none;
  }
  
`;
