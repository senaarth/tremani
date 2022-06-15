import React from "react";
import Head from "next/head";

import { Container, Video } from "../styles/Home";

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
      <Video autoPlay muted playsInline>
        <source src="/videos/movie_mobile.mp4" type="video/mp4" />
      </Video>
    </Container>
  );
}
