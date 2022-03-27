import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 910px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    margin: 0;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0 2.625rem 0;

  img {
    width: 32.5%;
  }
`;
