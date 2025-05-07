import AuthPage from "@/pages/auth/AuthPage";
import GuestGuard from "./guards/GuestGuard";

const guestRoutes = [
  {
    element: <GuestGuard />,
    path: "/",
    children: [
      {
        element: <AuthPage />,
        path: "/login",
      },
      {
        element: <AuthPage />,
        path: "/register",
      },
    ],
  },
];

export default guestRoutes;
