import React from "react";
import Head from "next/head";

import { Agende } from "../components/Agende";

import { PageContainer } from "../styles/global";

/**
 * Social Page
 * @return {JSX.Element}
 */

export default function Social(): JSX.Element {
  return (
    <PageContainer>
      <Head>
        <title>Social | Vila Tremani</title>
      </Head>
      <img src="/images/img07.png" alt="" className="banner" />
      <h1>Social</h1>
      <p>
        O cenário perfeito para seu evento dos sonhos. Casamentos, Debutantes,
        Bodas, Aniversários, Bar Mitzvah e Bat Mitzvah.
      </p>
      <Agende />
    </PageContainer>
  );
}
