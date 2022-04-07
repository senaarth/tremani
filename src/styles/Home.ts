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
`;

export const Slider = styled.div`
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  background: url(/images/foto1.jpg) center center no-repeat;
  background-size: cover;

  /* animation: slider 60s ease-in infinite; */

  @keyframes slider {
    10% {
      background: url(/images/foto1.jpg) center center no-repeat;
      background-size: cover;
    }

    20% {
      background: url(/images/foto2.png) center center no-repeat;
      background-size: cover;
    }

    30% {
      background: url(/images/foto3.png) center center no-repeat;
      background-size: cover;
    }

    40% {
      background: url(/images/foto4.png) center center no-repeat;
      background-size: cover;
    }

    50% {
      background: url(/images/foto1.jpg) center center no-repeat;
      background-size: cover;
    }

    60% {
      background: url(/images/foto2.png) center center no-repeat;
      background-size: cover;
    }

    70% {
      background: url(/images/foto3.png) center center no-repeat;
      background-size: cover;
    }

    80% {
      background: url(/images/foto4.png) center center no-repeat;
      background-size: cover;
    }

    90% {
      background: url(/images/foto1.jpg) center center no-repeat;
      background-size: cover;
    }

    100% {
      background: url(/images/foto2.png) center center no-repeat;
      background-size: cover;
    }
  }
`;
