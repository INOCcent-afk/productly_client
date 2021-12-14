import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProductData } from "../../utils/reactQueryHooks/productsQueryHooks";

const ProductDetailsPage = () => {
  const router = useRouter();

  let id;
  id = router.query.id;
  if (!id && typeof window !== "undefined") {
    id = window.location.pathname.split("/").pop();
  }

  const { data, isLoading, isError } = useProductData(id, true, id);

  !data && !isLoading && typeof window !== "undefined" && router.push("/404");

  return <div>{data && data.product_name}</div>;
};

export default ProductDetailsPage;
