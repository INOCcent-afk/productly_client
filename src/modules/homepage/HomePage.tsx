import React, { ReactNode } from "react";
import { Page } from "../../models/next/INext";
import AuthLayout from "../../shared-components/AuthLayout";
import Layout from "../../shared-components/Layout";
import MainLayout from "../../shared-components/MainLayout";

const HomePage: Page = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <Layout>
        <AuthLayout>{page}</AuthLayout>
      </Layout>
    </MainLayout>
  );
};
