import React, { ReactNode } from "react";
import { Page } from "../../models/next/INext";
import Layout from "../../shared-components/Layout";
import MainLayout from "../../shared-components/MainLayout";
import UserFormComponent from "./UserFormComponent";

const LoginPage: Page = () => {
  return <UserFormComponent pageType="login" />;
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <Layout>{page}</Layout>
    </MainLayout>
  );
};
