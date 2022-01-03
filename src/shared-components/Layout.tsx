import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import Footer from "../ui/Footer";
import Header from "../ui/header/Header";
import { useRouter } from "next/router";
import { useAppDispatch } from "../redux/hooks";
import { setUserDispatch } from "../redux/AuthSlice.slice";
import { verifyUser } from "../utils/api/verify_user";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const checkAuthenticated = async () => {
    const data = await verifyUser(localStorage.getItem("token")!);

    if (
      data !== true &&
      router.pathname !== "/" &&
      router.pathname !== "/register" &&
      !router.pathname.includes("/profile/")
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
  }, [router]);

  return (
    <>
      <StyledLayout>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Header />
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
