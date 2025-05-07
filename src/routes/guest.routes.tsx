import AuthPage from "@/pages/auth/AuthPage";

const guestRoutes = [
  {
    element: <AuthPage />,
    path: "/login",
  },
  {
    element: <AuthPage />,
    path: "/register",
  },
];

export default guestRoutes;
