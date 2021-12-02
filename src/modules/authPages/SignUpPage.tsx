import React, { ReactNode } from "react";
import { Page } from "../../models/next/INext";
import Layout from "../../shared-components/Layout";
import MainLayout from "../../shared-components/MainLayout";
import UserFormComponent from "./UserFormComponent";

const SignUpPage: Page = () => {
  return <UserFormComponent pageType="signup" />;
};

export default SignUpPage;

SignUpPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <Layout>{page}</Layout>
    </MainLayout>
  );
};
