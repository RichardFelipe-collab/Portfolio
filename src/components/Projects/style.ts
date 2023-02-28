import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 90rem;
  margin-top: 2%;
  margin-left: 2%;
  padding: 2.5rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #f12711 !important;
  display: block;
  /* fallback for old browsers */

  .card {
    width: 100%;
    //min-width: 70%;
    //border: solid 1px;
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem;
    background-color: var(--card);
  }

  .row {
    display: flex;
  }
  span {
    font-size: 80%;
  }

  .card > img {
    width: 100%;
  }

  .header{
    margin-left: 10%;
  }

  @media (max-width: 1120px) {
    width: 50rem;
    margin-top: 2%;

    padding: 3.5rem;

    .row {
      display: block;
    }
    .card {
      width: 80%;
      background-color: var(--card);
    }
    .card > img {
      width: 70%;
    }
  }

  @media (max-width: 900px) {
    width: 105%;

    margin-top: 2%;
    margin-left: -10%;
    padding: 0;
    align-items: flex-end;
    color: #f12711 !important;
    .card {
      width: 100%;
      background-color: var(--card);
    }
    .card > img {
      width: 100%;
    }
  }
`;
