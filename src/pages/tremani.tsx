import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Agende } from "../components/Agende";

import { PageContainer } from "../styles/global";

/**
 * Tremani Page
 * @return {JSX.Element}
 */

export default function Tremani(): JSX.Element {
  const router = useRouter();
  const { query } = router;

  React.useEffect(() => {
    if (query.scroll) {
      setTimeout(() => {
        const footer = document.querySelector("footer");

        footer.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
      }, 500);
    }
  }, [query]);

  return (
    <PageContainer>
      <Head>
        <title>Tremani | Vila Tremani</title>
      </Head>
      <img src="/images/img08.png" alt="" className="banner" />
      <h1>Tremani</h1>
      <p>
        Atmosfera encantadora, cercada pela natureza e a poucos minutos de São
        Paulo. Tudo que você sempre sonhou para o seu evento se torna realidade
        no Vila Tremani. Um espaço cuidadosamente projetado para envolver todos
        em um clima romântico e encantador. <br /> <br />
        Totalmente incorporado à natureza, com arquitetura contemporânea, um
        belo paisagismo e ampla vista para o horizonte, o cenário perfeito para
        cerimônias ao ar livre, seja a tarde ou ao anoitecer.
      </p>
      <Agende />
    </PageContainer>
  );
}
