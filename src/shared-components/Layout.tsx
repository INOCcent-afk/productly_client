import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Router, { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUserDispatch, signOutDispatch } from "../redux/AuthSlice.slice";
import { ToastContainer } from "react-toastify";
import { verifyUser } from "../utils/api/verify_user";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const selectAuth = useAppSelector((state) => state.auth);
  const router = useRouter();

  const handleSignOut = () => {
    dispatch(signOutDispatch());
    Router.push("/");
  };

  const checkAuthenticated = async () => {
    const data = await verifyUser(localStorage.getItem("token")!);

    if (
      data !== true &&
      router.pathname !== "/" &&
      router.pathname !== "/register"
    )
      router.push("/");
    else if (
      data === true &&
      (router.pathname === "/" || router.pathname === "/register")
    ) {
      router.push("/productly-homepage");
    }
  };

  useEffect(() => {
    checkAuthenticated();
    dispatch(setUserDispatch());
  }, [router.pathname]);

  return (
    <>
      <ToastContainer />
      <StyledContainer>
        {selectAuth.token && <h1>hello {selectAuth.user.display_name}</h1>}
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
