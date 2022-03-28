import styled from "styled-components";

export const ListContainer = styled.div`
  width: 90%;
  max-width: 60rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin-bottom: 8.5rem;

  @media (min-width: 1067px) {
    justify-content: center;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;

  p {
    color: black;
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0;
    text-align: left;
    margin-left: 1.25rem;
    width: 10rem;
    text-transform: uppercase;
  }

  img {
    width: 3.25rem;
    height: 3.25rem;
  }

  @media (max-width: 630px) {
    width: 100%;
  }

  @media (min-width: 1067px) {
    width: 33.33%;
    max-width: 20rem;
    justify-content: center;
  }
`;
