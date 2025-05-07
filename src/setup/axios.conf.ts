import { API_URL } from "@/common/constants/app.const";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { toast } from "sonner";

const axiosInterceptors = axios.create({
  baseURL: API_URL, // Replace with your backend URL and port
  timeout: 10000, // Optional: specify request timeout in milliseconds
});

export const setAuthTokenOnAxiosInterceptors = (authToken: string) => {
  axiosInterceptors.defaults.headers["Authorization"] = `Bearer ${authToken}`;
};

axiosInterceptors.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return {
      ...response,
      data: data?.data || data,
    };
  },
  (error: AxiosError) => {
    const { response } = error;
    const data: any = response?.data;
    const message = data?.error || data?.message || error.message;
    toast.error(message);
    return Promise.reject({
      ...error,
      message,
    });
  }
);

export default axiosInterceptors;
