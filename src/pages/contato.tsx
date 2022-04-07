import React from "react";
import Head from "next/head";

import { Agende } from "../components/Agende";

import { PageContainer } from "../styles/global";

/**
 * Contato Page
 * @return {JSX.Element}
 */

export default function Contato(): JSX.Element {
  return (
    <PageContainer
      style={{
        margin: 0,
        padding: 0,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Contato | Vila Tremani</title>
      </Head>
      <Agende customStyles={{ padding: "4rem 0 0" }} />
    </PageContainer>
  );
}
