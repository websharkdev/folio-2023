import type { AppProps } from "next/app";

import "@/assets/styles/general.css";

import MaineProvider from "@/providers/MaineProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MaineProvider>
      <Component {...pageProps} />
    </MaineProvider>
  );
};

export default MyApp;
