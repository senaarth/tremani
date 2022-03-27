import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;

    font-family: 'Exo', sans-serif;
  }

  img {
    object-fit: contain;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 910px;
  padding-bottom: 7.25rem;

  .banner {
    width: 100vw;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 2.5px;
    color: #425d73;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  p {
    width: 80%;
    color: #666666;
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 7.5rem;
    font-weight: 500;
  }
`;
