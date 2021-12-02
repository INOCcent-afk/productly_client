import React, { FC, ReactNode } from "react";
import AuthLayout from "../../shared-components/AuthLayout";
import Layout from "../../shared-components/Layout";

const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};
