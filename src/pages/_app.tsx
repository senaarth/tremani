import React from "react";
import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default MyApp;
