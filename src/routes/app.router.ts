import { createBrowserRouter } from "react-router";
import errorRoutes from "./error.routes";
import guestRoutes from "./guest.routes";
import publicRoutes from "./public.routes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    children: [...publicRoutes, ...guestRoutes, ...errorRoutes],
  },
]);

export default appRouter;
