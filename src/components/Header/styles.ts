import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 6rem;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
  opacity: 0.7 !important;
  position: relative;

  * {
    color: rgba(255, 255, 255, 0.5);
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(0.6);
    }
  }

  transition: opacity 0.6s;

  @media (max-width: 1200px) {
    &.active {
      opacity: 1 !important;
    }
  }
`;

export const ContentContainer = styled.header`
  height: 100%;
  width: 90%;
  max-width: 1260px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 0;

  a.logo {
    width: 15%;
    min-width: 5rem;
    max-width: 20rem;

    img {
      width: 100%;
    }
  }
`;

export const Navigation = styled.nav`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    li {
      list-style: none;

      button {
        font-size: 1rem;
        letter-spacing: 2.5px;

        &.active,
        &:disabled {
          color: white;
          font-weight: 500;

          filter: brightness(1) !important;
          cursor: default;
        }
      }

      button {
        outline: none;
        background: transparent;
        border: 0;
      }

      & + li {
        margin-left: 1rem;
        padding-left: 1rem;
        border-left: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
  }

  @media (max-width: 1200px) {
    position: absolute;
    padding-bottom: 2rem;

    transform: translateX(100%);
    transition: transform 0.6s;

    top: 6rem;
    left: 0;

    width: 100vw;
    background-color: black;

    ul {
      flex-direction: column;

      li + li {
        border: 0;
        padding: 0;
        margin-left: 0;
        margin-top: 0.75rem;
      }
    }

    &.active {
      transform: translateX(0%);
    }
  }
`;

export const Hamburguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;

  span {
    width: 32px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.6);

    transition: all 0.6s;

    & + span {
      margin-top: 8px;
    }
  }

  cursor: pointer;
  transition: filter 0.2s;

  &.active {
    span.line1 {
      transform: rotate(-45deg) translate(-8px, 8px);
    }

    span.line2 {
      opacity: 0;
    }

    span.line3 {
      transform: rotate(45deg) translate(-5px, -7px);
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
