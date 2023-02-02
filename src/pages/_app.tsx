import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const address = "https://addicted-cat-471.convex.cloud";
const convex = new ConvexReactClient(address);
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ConvexProvider client={convex}>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ConvexProvider>
  );
}
