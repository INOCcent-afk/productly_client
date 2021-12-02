import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
