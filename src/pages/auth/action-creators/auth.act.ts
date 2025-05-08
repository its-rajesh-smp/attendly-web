import type { AppDispatch } from "@/common/hooks/useAppDispatch";
import { Logger } from "@/common/utils";
import { setAuthTokenOnAxiosInterceptors } from "@/setup/axios.conf";
import { authenticate, logout } from "../reducers/auth.reducer";
import { createAccount, fetchUser, login } from "../service/auth.service";

export const loginAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await login(formData);
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      Logger.logError(error);
    }
  };
};

export const registerAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await createAccount(formData);
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      Logger.logError(error);
    }
  };
};

export const fetchUserAct = () => {
  return async (dispatch: AppDispatch) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return false;
    setAuthTokenOnAxiosInterceptors(authToken);
    try {
      const response = await fetchUser();
      const { user } = response.data;
      dispatch(authenticate({ user, authToken }));
    } catch (error) {
      dispatch(logout());
      Logger.logError(error);
    }
  };
};
