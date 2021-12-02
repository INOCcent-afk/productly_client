import React from "react";
import Layout from "../../shared-components/Layout";
import UserFormComponent from "./UserFormComponent";

const LoginPage = () => {
  return (
    <Layout>
      <UserFormComponent pageType="login" />
    </Layout>
  );
};

export default LoginPage;
