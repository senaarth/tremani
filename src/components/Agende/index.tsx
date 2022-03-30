import React from "react";

import { Container, ImagesContainer } from "./styles";

export function Agende() {
  return (
    <Container id="agende">
      <h1>AGENDE SUA VISITA</h1>
      <ImagesContainer>
        <img src="/images/img02.png" alt="" />
        <img src="/images/img03.png" alt="" />
        <img src="/images/img04.png" alt="" />
      </ImagesContainer>
      <p>
        Conheça tudo o que o Vila Tremani pode oferecer <br />e inspire-se para
        fazer seu evento inesquecível.
      </p>
    </Container>
  );
}
