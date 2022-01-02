import { useQuery } from "react-query";
import { TRouterQuery } from "../../models/nextType/TRouterQuery";
import { IProduct, IProductFullQuery } from "../../models/products/product";
import { ISingleUser } from "../../models/user/ISIngleUser";

import {
  getAllProducts,
  getPopularRatedProducts,
  getSingleProduct,
  getSingleUser,
  searchUsers,
} from "../api/products_api";

export const useProductsData = (state?: any) =>
  useQuery<IProduct[]>(["products", state], getAllProducts);

export const usePopularProductsData = (state?: any) =>
  useQuery<IProduct[]>(["popular-products", state], getPopularRatedProducts);

export const useUsersSearchedData = (
  name: string,
  isEnabled?: boolean,
  state?: any,
  keepPreviousData?: boolean
) =>
  useQuery(["searchedUsers", state], () => searchUsers(name), {
    enabled: isEnabled,
    keepPreviousData,
  });

export const useProductData = (
  id: TRouterQuery,
  isEnabled?: boolean,
  state?: any
) =>
  useQuery<IProductFullQuery>(["product", state], () => getSingleProduct(id), {
    enabled: isEnabled,
  });

export const useSingleUser = (id: string) =>
  useQuery<ISingleUser>("singleUser", () => getSingleUser(id));
