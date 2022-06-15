import React from "react";
import Head from "next/head";

import { Agende } from "../components/Agende";

import { PageContainer } from "../styles/global";

/**
 * Corporativo Page
 * @return {JSX.Element}
 */

export default function Corporativo(): JSX.Element {
  return (
    <PageContainer>
      <Head>
        <title>Corporativo | Vila Tremani</title>
      </Head>
      <img src="/images/foto-corporativo.jpg" alt="" className="banner" />
      <h1>Corporativo</h1>
      <p>
        A estrutura perfeita para seu evento corporativos. Workshops,
        treinamentos, convenções, lançamentos de produtos confraternizações,
        jantares e coquetéis.
      </p>
      <Agende />
    </PageContainer>
  );
}
