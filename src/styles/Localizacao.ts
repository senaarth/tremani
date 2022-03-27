import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 90%;
  max-width: 1100px !important;
  margin-top: 1.75rem;
  margin-bottom: 4.375rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 18rem;
    margin-bottom: 2rem;

    h1 {
      margin-bottom: 3.75rem;
      text-transform: uppercase;
    }

    p {
      margin: 0;
      width: 100%;
      line-height: 1.5rem;

      & + p {
        margin-top: 0.75rem;
      }
    }
  }

  img {
    width: 100%;
    max-width: 45rem;
  }

  @media (min-width: 1160px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      margin-bottom: 0;
    }
  }
`;
