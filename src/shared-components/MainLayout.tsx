import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../redux/store";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../utils/theme";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
