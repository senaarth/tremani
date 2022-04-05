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

  @media (min-width: 774px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
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
    font-size: 0.8rem;
    line-height: 1.25rem;
    margin: 0;
    text-align: left;
    margin-left: 1.25rem;
    width: 10rem;
    text-transform: uppercase;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 630px) {
    width: 100%;
  }

  @media (min-width: 774px) {
    width: 100%;
    margin: 0;
  }
`;
