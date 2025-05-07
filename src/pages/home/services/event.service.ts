import axiosInterceptors from "@/setup/axios.conf";

export const toggleEventParticipation = async (id: string) => {
  return axiosInterceptors.post(`/event-participation/${id}`);
};
