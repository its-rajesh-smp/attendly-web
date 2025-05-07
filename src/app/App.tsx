import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { fetchUserAct } from "@/pages/auth/action-creators/auth.act";
import LoadingPage from "@/pages/loading/LoadingPage";
import appRouter from "@/routes/app.router";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(fetchUserAct());
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return <RouterProvider router={appRouter} />;
}

export default App;
