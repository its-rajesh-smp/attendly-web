import { setAuthTokenOnAxiosInterceptor } from "@/setup/axios.conf";
import { createSlice } from "@reduxjs/toolkit";
import type { IAuthUser } from "../types/user.type";

interface IAuthState {
  isAuthenticated: boolean;
  user: IAuthUser;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      setAuthTokenOnAxiosInterceptor(action.payload.authToken);
      localStorage.setItem("authToken", action.payload.authToken);
      return state;
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      return state;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: () => {
      localStorage.removeItem("authToken");
      return initialState;
    },
  },
});

export const { authenticate, logout, setUser, setIsAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
