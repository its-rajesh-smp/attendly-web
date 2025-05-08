import axiosInterceptors from "@/setup/axios.conf";
import { useEffect, useState } from "react";
import { Logger } from "../utils";

function useFetch(path: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInterceptors.get(path);
        setData(response?.data);
      } catch (error) {
        Logger.logError(error);
      }
    })();
  }, [path]);

  return data;
}

export default useFetch;
