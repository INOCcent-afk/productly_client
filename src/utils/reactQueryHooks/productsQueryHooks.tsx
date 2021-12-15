import { useQuery } from "react-query";
import { TRouterQuery } from "../../models/nextType/TRouterQuery";
import { IProduct } from "../../models/products/product";
import { getAllProducts, getSingleProduct } from "../api/products_api";

export const useProductsData = () =>
  useQuery<IProduct[]>("products", getAllProducts);

export const useProductData = (
  id: TRouterQuery,
  isEnabled?: boolean,
  state?: any
) =>
  useQuery<IProduct>(["product", state], () => getSingleProduct(id), {
    enabled: isEnabled,
  });

