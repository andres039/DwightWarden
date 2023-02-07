import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import convexConfig from "../../convex.json";
import Login from "./index";
import Home from "./account";

const address = "https://addicted-cat-471.convex.cloud";
const convex = new ConvexReactClient(address);
const authInfo = convexConfig.authInfo[0];

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ConvexProviderWithAuth0
      authInfo={authInfo}
      loggedOut={<Login />}
      client={convex}
    >
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
    </ConvexProviderWithAuth0>
  );
}
