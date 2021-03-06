import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../models/Auth/IAuth";
import { IUser } from "../models/user/IUser";

const initialState: IAuth = {
  token: "",
  user: {
    user_id: "",
    first_name: "",
    last_name: "",
    bio_description: "",
    email: "",
    password: "",
    cover_photo: "",
    display_picture: "",
  },
};

const oneHour = 3600000;

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signInDispatch: (state, action: PayloadAction<IAuth>) => {
      let obj = {
        time: new Date().getTime(),
        expire: oneHour,
      };

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("expiredUser", JSON.stringify(obj));

      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    },
    signOutDispatch: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return {
        ...state,
        token: "",
        user: {
          user_id: "",
          first_name: "",
          last_name: "",
          bio_description: "",
          email: "",
          password: "",
          cover_photo: "",
          display_picture: "",
        },
      };
    },
    refetchUser: (state, action: PayloadAction<IUser>) => {
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
      };
    },
    setUserDispatch: (state) => {
      if (localStorage.getItem("expiredUser")) {
        let name = JSON.parse(localStorage.getItem("expiredUser")!);
        if (new Date().getTime() - name.time >= name.expire) {
          localStorage.removeItem("expiredUser");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
      const token = localStorage.getItem("token")!;
      const userData = JSON.parse(localStorage.getItem("user")!);

      return {
        ...state,
        token: token,
        user: userData,
      };
    },
  },
});

export const { signInDispatch, signOutDispatch, setUserDispatch, refetchUser } =
  authSlice.actions;

export default authSlice.reducer;
