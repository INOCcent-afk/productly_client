import { useQuery } from "react-query";
import { TRouterQuery } from "../../models/nextType/TRouterQuery";
import { IProduct } from "../../models/products/product";

import {
  getAllProducts,
  getSingleProduct,
  searchUsers,
} from "../api/products_api";

export const useProductsData = () =>
  useQuery<IProduct[]>("products", getAllProducts);

export const useUsersSearchedData = (
  name: string,
  token: string,
  isEnabled?: boolean,
  state?: any,
  keepPreviousData?: boolean
) =>
  useQuery(["searchedUsers", state], () => searchUsers(name, token), {
    enabled: isEnabled,
    keepPreviousData,
  });

export const useProductData = (
  id: TRouterQuery,
  isEnabled?: boolean,
  state?: any
) =>
  useQuery<IProduct>(["product", state], () => getSingleProduct(id), {
    enabled: isEnabled,
  });
