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
    <PageContainer
      style={{
        marginTop: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Contato | Vila Tremani</title>
      </Head>
      <Agende />
    </PageContainer>
  );
}
