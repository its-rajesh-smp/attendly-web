import axiosInterceptors from "@/setup/axios.conf";

export const rsvpToEvent = async (id: string) => {
  return axiosInterceptors.post(`/event-rsvp/${id}`);
};

export const unRsvpFromEvent = async (id: string) => {
  return axiosInterceptors.delete(`/event-rsvp/${id}`);
};
