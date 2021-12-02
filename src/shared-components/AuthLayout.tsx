import React, { FC, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { verifyUser } from "../utils/api/verify_user";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [user, setUser] = useState<boolean>(false);

  const checkAuthenticated = async () => {
    const data = await verifyUser(localStorage.getItem("token")!);

    if (data === true) setUser(data);
    else Router.push("/");
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
