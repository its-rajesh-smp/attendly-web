import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
