import type { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setAuthTokenOnAxiosInterceptor } from "@/setup/axios.conf";
import { authenticate, logout } from "../reducers/auth.reducer";
import { createAccount, fetchUser, login } from "../service/auth.service";

export const loginAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    const response = await login(formData);
    const { authToken, user } = response.data;
    dispatch(authenticate({ authToken, user }));
  };
};

export const registerAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    const response = await createAccount(formData);
    const { authToken, user } = response.data;
    dispatch(authenticate({ authToken, user }));
  };
};

export const fetchUserAct = () => {
  return async (dispatch: AppDispatch) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return false;
    setAuthTokenOnAxiosInterceptor(authToken);
    try {
      const response = await fetchUser();
      const { user } = response.data;
      dispatch(authenticate({ user, authToken }));
    } catch (error) {
      dispatch(logout());
    }
  };
};
