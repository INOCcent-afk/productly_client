import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../shared-components/Layout";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
