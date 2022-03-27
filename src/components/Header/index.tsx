import React from "react";
import Link from "next/link";

import { Container, ContentContainer, Navigation, Hamburguer } from "./styles";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleClose() {
    setMenuOpen(false);
  }

  return (
    <Container className={menuOpen ? "active" : ""}>
      <ContentContainer>
        <a href="/" className="logo" onClick={() => handleClose()}>
          <img src="/images/logo.png" alt="vila tremani logo" />
        </a>
        <Hamburguer
          className={menuOpen ? "active" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </Hamburguer>
        <Navigation className={menuOpen ? "active" : ""}>
          <ul>
            <li onClick={() => handleClose()}>
              <Link href="/tremani">TREMANI</Link>
            </li>
            <li onClick={() => handleClose()}>
              <Link href="/estrutura">ESTRUTURA</Link>
            </li>
            <li onClick={() => handleClose()}>
              <Link href="/social">SOCIAL</Link>
            </li>
            <li onClick={() => handleClose()}>
              <Link href="/corporativo">CORPORATIVO</Link>
            </li>
            <li onClick={() => handleClose()}>
              <Link href="/contato">CONTATO</Link>
            </li>
            <li onClick={() => handleClose()}>
              <Link href="/localizacao">LOCALIZAÇÃO</Link>
            </li>
            <li onClick={() => handleClose()}>
              <Link href="/galeria">GALERIA</Link>
            </li>
          </ul>
        </Navigation>
      </ContentContainer>
    </Container>
  );
}
