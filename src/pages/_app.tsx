import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from "@/components/theme";
import Icons from "@/components/icons/Icons";
import Logo from "../../public/Favicon.png";

const emotionCache = createCache({
  key: "style",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taipei Hackathon</title>
        <link rel="icon" href={Logo.src} />
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          <Icons />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
