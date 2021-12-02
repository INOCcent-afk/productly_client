import React, { FC, ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { useAppDispatch } from "../redux/hooks";
import { signOutDispatch } from "../redux/AuthSlice.slice";
import Router from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    Router.push("/");
  };

  return (
    <StyledContainer>
      <ul>
        <li>
          <Link href="/productly-homepage">Homepage</Link>
        </li>
        <li>
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/register">Sign up</Link>
        </li>
        <li onClick={handleSignOut}>Log out</li>
      </ul>
      <Header />
      {children}
      <Footer />
    </StyledContainer>
  );
};

export default Layout;

const StyledContainer = styled.div`
  padding: 30px;
`;
