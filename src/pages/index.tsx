import React from "react";
import Head from "next/head";

import { Container } from "../styles/Home";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  // const [innerHeight, setInnerHeight] = React.useState<string | number>(
  //   "100vh"
  // );

  // React.useEffect(() => {
  //   if (window) {
  //     setInnerHeight(window.innerHeight);
  //   }
  // }, []);

  return (
    <Container>
      <Head>
        <title>Home | Vila Tremani</title>
      </Head>
      <img src="/images/foto1.jpg" alt="Background" />
    </Container>
  );
}
