import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

const initialState: Auth = {
  token: "",
};

interface Auth {
  token: string;
}

export const authSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    signInDispatch: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);

      return {
        token: action.payload,
      };
    },
    signOutDispatch: (state) => {
      localStorage.removeItem("token");
      return {
        token: "",
      };
    },
  },
});

export const { signInDispatch, signOutDispatch } = authSlice.actions;

export const selectToken = (state: AppState) => state.auth.token;

export default authSlice.reducer;
