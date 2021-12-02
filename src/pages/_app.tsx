import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { Page } from "../models/next/INext";

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
