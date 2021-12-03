import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../models/Auth/IAuth";
import { IUser } from "../models/user/IUser";

const initialState: IAuth = {
  token: "",
  user: {
    user_id: "",
    display_name: "",
    email: "",
    password: "",
    cover_photo: "",
    display_picture: "",
  },
  isLogin: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signInDispatch: (
      state,
      action: PayloadAction<{ token: string; user: IUser }>
    ) => {
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLogin: true,
      };
    },
    signOutDispatch: (state) => {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        user: {
          user_id: "",
          display_name: "",
          email: "",
          password: "",
          cover_photo: "",
          display_picture: "",
        },
        isLogin: false,
      };
    },
  },
});

export const { signInDispatch, signOutDispatch } = authSlice.actions;

export default authSlice.reducer;
