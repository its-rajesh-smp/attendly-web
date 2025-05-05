import { createBrowserRouter } from "react-router";
import errorRoutes from "./error.routes";
import privateRoutes from "./private.routes";
import publicRoutes from "./public.routes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    children: [...publicRoutes, ...privateRoutes, ...errorRoutes],
  },
]);

export default appRouter;
