import React from "react";

import { Container, ContentContainer, IconsContainer } from "./styles";

export function Footer() {
  return (
    <Container>
      <ContentContainer>
        <p>Copyright © {new Date().getFullYear()}</p>
        <div className="row">
          <img src="/images/ico-contato.png" alt="Icone de E-mail" />
          <a href="mailto:contato@vilatremani.com.br">
            contato@vilatremani.com.br
          </a>
        </div>
        <div className="row">
          <img src="/images/ico-telefone.png" alt="Icone de Telefone" />
          <p>
            <span style={{ fontSize: "0.75rem" }}>11</span> 4703.4616 •
            993768686
          </p>
        </div>
        <IconsContainer>
          <a href="/" target="_blank">
            <img src="/images/ico-facebook.png" alt="Ícone do facebook" />
          </a>
          <a href="/" target="_blank">
            <img src="/images/ico-instagram.png" alt="Ícone do instagram" />
          </a>
          <a href="/" target="_blank">
            <img src="/images/ico-whatsapp.png" alt="Ícone do whatsapp" />
          </a>
          <a href="/" target="_blank">
            <img src="/images/ico-pinterest.png" alt="Ícone do pinterest" />
          </a>
        </IconsContainer>
      </ContentContainer>
    </Container>
  );
}
