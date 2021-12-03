import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Page } from "../../models/next/INext";
import { useAppSelector } from "../../redux/hooks";
import UserFormComponent from "./UserFormComponent";

const LoginPage: Page = () => {
  return <UserFormComponent pageType="login" />;
};

export default LoginPage;
