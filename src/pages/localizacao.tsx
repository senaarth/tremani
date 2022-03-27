import React from "react";
import Head from "next/head";

import { Agende } from "../components/Agende";

import { PageContainer } from "../styles/global";
import { Container } from "../styles/Localizacao";

/**
 * Localizacao Page
 * @return {JSX.Element}
 */

export default function Localizacao(): JSX.Element {
  return (
    <PageContainer>
      <Head>
        <title>Localização | Vila Tremani</title>
      </Head>
      <img src="/images/img06.png" alt="" className="banner" />
      <Container>
        <div>
          <h1>Localização</h1>
          <p>
            De fácil acesso, o Vila Tremani fica a 30 minutos da Faria Lima, na
            região oeste da grande São Paulo.
          </p>
          <p>
            Para chegar basta digitar no Waze ou Google Maps: “Vila Tremani”
          </p>
          <p>O aplicativo direciona para a porta do espaço.</p>
        </div>
        <img src="/images/mapa.png" alt="" />
      </Container>
      <Agende />
    </PageContainer>
  );
}
