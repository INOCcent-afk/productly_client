import React, { FC, ReactNode, useCallback, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { signOutDispatch } from "../redux/AuthSlice.slice";
import { toast, ToastContainer } from "react-toastify";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectAuth = useAppSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    Router.push("/");
  };

  // useEffect(() => {
  //   if (
  //     !selectAuth.isLogin &&
  //     router.pathname !== "/" &&
  //     router.pathname !== "/register"
  //   )
  //     router.push("/");
  // }, [router.pathname]);

  return (
    <>
      <ToastContainer />
      <StyledContainer>
        {selectAuth.isLogin && <h1>hello {selectAuth.user.display_name}</h1>}
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
          <h1></h1>
        </ul>
        <Header />
        {children}
        <Footer />
      </StyledContainer>
    </>
  );
};

export default Layout;

const StyledContainer = styled.div`
  padding: 30px;
`;
