import { ChakraProvider } from "@chakra-ui/react";

import AppTheme from "@/theme";

import "@fontsource/inter";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={AppTheme}
      toastOptions={{ defaultOptions: { position: "top-right" } }}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
