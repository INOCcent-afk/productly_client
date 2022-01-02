import axios from "axios";
import { TRouterQuery } from "../../models/nextType/TRouterQuery";
import { IReviewPost } from "../../models/products/reviews";
import { IUpdateUser } from "../../models/user/IUser";
import { IUserSignIn } from "../../models/user/IUserSign";
import { IUserSignUp } from "../../models/user/IUserSIgnUp";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/productly",
});

export const signIn = (formData: IUserSignIn) => API.post("/login", formData);
export const signUp = (formData: IUserSignUp) => API.post("/signup", formData);

export const getAllProducts = async () => {
  const { data } = await API.get("/products");

  return data.data.products;
};

export const getPopularRatedProducts = async () => {
  const { data } = await API.get("/products/top-rated");

  return data.data.products;
};

export const getSingleProduct = async (id: TRouterQuery) => {
  const { data } = await API.get(`/product/${id}`);

  return data.data;
};

export const searchProducts = async (name: string) => {
  const { data } = await API.get(`/products/search/${name}`);

  return data.data;
};

export const createReview = async (
  payload: IReviewPost,
  user_id: string | unknown,
  review_product_id: string
) => API.post(`/product/${user_id}/${review_product_id}/addReview`, payload);

export const getReviewsOfSingleProduct = async (id: string) => {
  const { data } = await API.get(`/product/${id}/reviews`);

  return data.data;
};

export const searchUsers = async (name: string) => {
  const { data } = await API.get(`/user/search/${name}`);

  return data.data;
};

export const uploadUserAvatar = async (
  id: string,
  payload: IUpdateUser,
  token: string
) =>
  API.put(`/user/${id}/edit-profile`, payload, {
    headers: {
      jwt_token: token,
    },
  });

export const getSingleUser = async (id: string) => {
  const { data } = await API.get(`/user/${id}`);

  return data.data;
};
