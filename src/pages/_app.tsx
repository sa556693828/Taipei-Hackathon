import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from "@/components/theme";
import Icons from "@/components/icons/Icons";

const emotionCache = createCache({
  key: "style",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          }
          rel="stylesheet"
        />
        <title>Taipei Hackathon</title>
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
