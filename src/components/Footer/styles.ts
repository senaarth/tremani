import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
  opacity: 0.7;

  * {
    color: rgba(255, 255, 255, 0.5);
  }

  img {
    opacity: 0.6;
    filter: grayscale(1);
  }
`;

export const ContentContainer = styled.footer`
  height: 100%;
  width: 90%;
  max-width: 1260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 1rem 0;

  p,
  a {
    font-size: 0.8rem;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    /* a {
      transition: opacity 0.4s;

      &:hover {
        opacity: 0.6;
      }
    } */

    img {
      width: 1rem;
      margin-right: 1rem;
    }
  }

  > div + div {
    margin-top: 0.75rem;
  }

  > p {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 0 1.75rem;

    > p {
      margin-bottom: 0;
    }

    > * + * {
      margin-top: 0;
    }

    > div + div {
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
  max-width: 120px;

  a {
    width: 20%;
    max-width: 1.25rem;
    transition: filter 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.6);
    }

    img {
      width: 100%;
      opacity: 0.4;
    }
  }
`;
