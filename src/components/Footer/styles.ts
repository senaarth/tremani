import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
  opacity: 0.5;

  * {
    color: rgba(255, 255, 255, 0.5);
  }

  img {
    opacity: 0.5;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 2rem 0;

  p,
  a {
    font-size: 1rem;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 2rem;
      margin-right: 1rem;
    }
  }

  > * + * {
    margin-top: 0.75rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;

    > * + * {
      margin-top: 0;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 200px;

  a {
    width: 20%;
    max-width: 2rem;
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      width: 100%;
    }
  }
`;
