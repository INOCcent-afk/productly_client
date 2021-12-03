import React from "react";
import { Page } from "../../models/next/INext";
import UserFormComponent from "./UserFormComponent";

const SignUpPage: Page = () => {
  return <UserFormComponent pageType="signup" />;
};

export default SignUpPage;
