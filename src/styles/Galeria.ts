import styled from "styled-components";

export const GaleriaContainer = styled.div`
  width: 90%;
  max-width: 910px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  transition: margin 0.5s;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    outline: none;
    background-color: transparent;

    transition: all 0.3s;

    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1;
    }

    &:hover {
      filter: brightness(0.6);
      cursor: pointer;
    }
  }
`;

export const SliderContainer = styled.div`
  width: 100vw;
  max-width: 1720px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 0;

  transition: height 0.5s;

  * {
    transition: height 0.5s;
  }

  .embla {
    overflow: hidden;
    height: 0;
    width: 90%;
  }

  .embla__container {
    display: flex;
    width: 100%;
  }

  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    height: 0;
    max-width: 100%;
  }

  .control {
    width: 5%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 70%;
      max-width: 1.5rem;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 100%;
        object-fit: contain;
        transition: filter 0.5s;
        height: 0;
      }

      &:hover {
        img {
          filter: brightness(0);
        }
      }
    }

    &.left {
      button img {
        transform: rotate(180deg);
      }
    }
  }

  &.visible {
    height: 50vh;

    @media (min-width: 1000px) {
      height: 70vh;
    }

    .embla {
      height: 50vh;

      @media (min-width: 1000px) {
        height: 70vh;
      }
    }

    .embla__slide {
      height: 50vh;

      @media (min-width: 1000px) {
        height: 70vh;
      }

      object-fit: cover;
    }

    .control {
      button img {
        height: unset;
      }
    }
  }
`;
