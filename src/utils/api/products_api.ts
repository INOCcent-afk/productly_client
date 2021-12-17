import axios from "axios";
import { TRouterQuery } from "../../models/nextType/TRouterQuery";
import { IReviewPost } from "../../models/products/reviews";
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

export const getSingleProduct = async (id: TRouterQuery) => {
  const { data } = await API.get(`/product/${id}`);

  return data.data.product;
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

export const searchUsers = async (name: string, token: string) => {
  const { data } = await API.get(`/user/search/${name}`, {
    headers: {
      jwt_token: token,
    },
  });

  return data.data;
};
