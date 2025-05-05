import { createBrowserRouter } from "react-router";
import errorRoutes from "./error.routes";
import privateRoutes from "./private.routes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    children: [...privateRoutes, ...errorRoutes],
  },
]);

export default appRouter;
