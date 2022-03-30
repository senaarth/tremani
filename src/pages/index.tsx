import React from "react";
import Head from "next/head";

import { Slider } from "../styles/Home";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  const [innerHeight, setInnerHeight] = React.useState<string | number>(
    "100vh"
  );

  React.useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Vila Tremani</title>
      </Head>
      <Slider style={{ height: innerHeight }} />
    </div>
  );
}
