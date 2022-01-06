import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import PageWrapper from "../components/PageWrapper";
import theme from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PageWrapper>
        <style global jsx>{`
          #__next {
            max-width: ${theme.sizes["4xl"]};
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            height: 100%;
          }
        `}</style>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
