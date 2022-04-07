import React from "react";

import { Container, ContentContainer, IconsContainer } from "./styles";

export function Footer() {
  return (
    <Container>
      <ContentContainer>
        <p>Copyright © {new Date().getFullYear()}</p>
        <div className="row">
          <img
            src="/images/ico-contato.png"
            alt="Icone de E-mail"
            style={{ width: "1.5rem" }}
          />
          <a href="mailto:contato@vilatremani.com.br">
            contato@vilatremani.com.br
          </a>
        </div>
        <div className="row">
          <img
            src="/images/ico-whatsapp.png"
            alt="Icone de Telefone"
            style={{ opacity: 0.4 }}
          />
          <p>
            <span style={{ fontSize: "0.75rem" }}>11</span> • 4703.4616 •
            993768686
          </p>
        </div>
        <IconsContainer>
          <a
            href="https://www.facebook.com/vilatremani/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/ico-facebook.png" alt="Ícone do facebook" />
          </a>
          <a
            href="https://www.instagram.com/vilatremani/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/ico-instagram.png" alt="Ícone do instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511993768686&app=facebook&entry_point=page_cta&fbclid=IwAR391KpqeGqhApF-awb8zKgYV0uT-EisxOi_F310JsLIQBGHH4aL8SuKSD8"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/ico-whatsapp.png" alt="Ícone do whatsapp" />
          </a>
          <a href="/">
            <img src="/images/ico-pinterest.png" alt="Ícone do pinterest" />
          </a>
        </IconsContainer>
      </ContentContainer>
    </Container>
  );
}
