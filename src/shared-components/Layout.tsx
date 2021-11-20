import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <StyledContainer>
      <ul>
        <li>
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/register">Sign up</Link>
        </li>
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
