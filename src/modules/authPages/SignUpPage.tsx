import React from "react";
import Layout from "../../shared-components/Layout";
import UserFormComponent from "./UserFormComponent";

const SignUpPage = () => {
  return (
    <Layout>
      <UserFormComponent pageType="signup" />
    </Layout>
  );
};

export default SignUpPage;
