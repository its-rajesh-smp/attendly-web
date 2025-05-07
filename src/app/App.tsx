import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { fetchUserAct } from "@/pages/auth/action-creators/auth.act";
import appRouter from "@/routes/app.router";
import { useEffect } from "react";
import { RouterProvider } from "react-router";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAct());
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
