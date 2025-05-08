import { toast } from "sonner";

const logError = (error: any) => {
  console.error(error);
  if (typeof error === "string") return toast.error(error);
  else return toast.error(error.message);
};
export default { logError };
