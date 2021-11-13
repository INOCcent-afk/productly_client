import React, { FC } from "react";
import Head from "next/head";

interface PageMetaTypes {
  title?: string;
  keywords?: string;
  description?: string;
}

const PageMeta: FC<PageMetaTypes> = ({
  title,
  keywords,
  description,
}: PageMetaTypes) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

PageMeta.defaultProps = {
  title: "Productly",
  keywords: "Products, Reviews, Rating",
  description: "display your products to be reviews",
};

export default PageMeta;
