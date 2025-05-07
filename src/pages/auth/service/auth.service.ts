import axiosInterceptors from "@/setup/axios.conf";

export const fetchUser = () => axiosInterceptors.get(`/user`);

export const createAccount = (data: any) =>
  axiosInterceptors.post("/user/register", data);

export const login = (data: any) => axiosInterceptors.post("/user/login", data);
