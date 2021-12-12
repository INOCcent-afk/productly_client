import axios from "axios";
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
