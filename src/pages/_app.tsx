import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../shared-components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
