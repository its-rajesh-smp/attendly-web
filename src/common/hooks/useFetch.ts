import axiosInterceptors from "@/setup/axios.conf";
import { useEffect, useState } from "react";

function useFetch(path: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await axiosInterceptors.get(path);
      setData(response?.data);
    })();
  }, [path]);

  return data;
}

export default useFetch;
