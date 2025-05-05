import Home from "@/pages/home/Home";
import AuthGuard from "./guards/AuthGuard";

const privateRoutes = [
  {
    element: <AuthGuard />,
    path: "/",
    children: [{ element: <Home />, path: "/" }],
  },
];

export default privateRoutes;
