import type { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate, logout } from "../reducers/auth.reducer";
import { createAccount, fetchUser, login } from "../service/auth.service";
import { setAuthTokenOnAxiosInterceptors } from "@/setup/axios.conf";

export const loginAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await login(formData);
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      throw error;
    }
  };
};

export const registerAct = (formData: {
  email: string;
  password: string;
  dashboardSlug: string;
}) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await createAccount(formData);
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      throw error;
    }
  };
};

export const fetchUserAct = () => {
  return async (dispatch: AppDispatch) => {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    if (!authToken) return false;
    setAuthTokenOnAxiosInterceptors(authToken);
    try {
      const response = await fetchUser();
      const { user } = response.data;
      dispatch(authenticate({ user, authToken }));
    } catch (error) {
      dispatch(logout());
      throw error;
    }
  };
};
