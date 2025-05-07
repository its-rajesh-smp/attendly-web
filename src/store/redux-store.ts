import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../pages/auth/reducers/auth.reducer";

const reduxStore = configureStore({
  reducer: {
    authSlice,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
