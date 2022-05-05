import styled from "styled-components";

export const Container = styled.div`
  /* padding-top: 6rem; */
  width: 100vw;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    flex: 1;
    object-fit: cover;
  }

  background-size: cover;

  animation: slider 36s ease-in infinite;

  @keyframes slider {
    0% {
      background: url(/images/home1.jpg) center center no-repeat;
      background-size: cover;
    }

    25% {
      background: url(/images/foto4.png) center center no-repeat;
      background-size: cover;
    }

    50% {
      background: url(/images/home1.jpg) center center no-repeat;
      background-size: cover;
    }

    75% {
      background: url(/images/foto4.png) center center no-repeat;
      background-size: cover;
    }

    100% {
      background: url(/images/home1.jpg) center center no-repeat;
      background-size: cover;
    }
  }
`;

export const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;
