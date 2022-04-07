import React from "react";
import Head from "next/head";

import { Container } from "../styles/Home";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Home | Vila Tremani</title>
      </Head>
      <img src="/images/foto1.jpg" alt="Background" />
    </Container>
  );
}
