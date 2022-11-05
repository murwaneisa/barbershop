import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Head from "next/head";
import { Layout } from "../layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Talentinho249</title>
        <meta name="description" content="salon de coiffure" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Open Graph */}
        <meta property="og:url" content="www.talentinho249.com" key="ogurl" />
        {/* change the image later */}
        {/* <meta property="og:image" content="/images/ebo-og.jpg" key="ogimage" /> */}
        <meta
          property="og:site_name"
          content="Talentinho249 Official Webpage"
          key="ogsitename"
        />
        <meta property="og:title" content="Talentinho249" key="ogtitle" />
        <meta
          property="og:description"
          content="le meilleur salon de coiffure"
          key="ogdesc"
        />
        <meta
          property="og:description"
          content="le salon de coiffure le plus proche à Sens"
          key="ogdesc"
        />
        <meta
          property="og:description"
          content="coupes de cheveux sens"
          key="ogdesc"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
