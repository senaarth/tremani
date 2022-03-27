import React from "react";
import Head from "next/head";

import { Slider } from "../styles/Home";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Home | Vila Tremani</title>
      </Head>
      <Slider />
    </div>
  );
}
