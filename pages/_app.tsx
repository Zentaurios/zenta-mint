import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { NETWORK } from "../const/contractAddresses";
import Navbar from "../components/navbar";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={NETWORK}>
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
