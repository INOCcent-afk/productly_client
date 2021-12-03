import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../shared-components/Layout";
import { useRouter } from "next/router";
import { verifyUser } from "../utils/api/verify_user";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const checkAuthenticated = async () => {
    const data = await verifyUser(localStorage.getItem("token")!);

    // if (data !== true)

    if (
      data !== true &&
      router.pathname !== "/" &&
      router.pathname !== "/register"
    )
      router.push("/");
  };

  useEffect(() => {
    checkAuthenticated();
  }, [router.pathname]);

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
