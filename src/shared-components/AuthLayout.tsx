import React, { FC, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { verifyUser } from "../utils/api/verify_user";

interface LayoutProps {
  children: ReactNode;
}

let tite =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZWE4ZDQxNmQtNWFlYy00ZmUxLWJjMWItYzFkNDJhYTIyZDIwIn0sImlhdCI6MTYzODQ1NDg4MCwiZXhwIjoxNjM4NDU4NDgwfQ.FnRzTW53FCf_XpY5KZ2hI_vP-j9jkNl4VVNoeY_c35U";

const AuthLayout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [user, setUser] = useState<boolean>(false);

  const checkAuthenticated = async () => {
    const data = await verifyUser(tite);

    if (data === true) setUser(data);
    else Router.push("/");
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
