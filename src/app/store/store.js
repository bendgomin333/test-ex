import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from '../../features/auth/model';
import { NewsReducer } from "../../features/newsline/model";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    news: NewsReducer
  }
})