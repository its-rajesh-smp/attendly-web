import EventPage from "@/pages/event/EventPage";
import AuthGuard from "./guards/AuthGuard";

const privateRoutes = [
  {
    element: <AuthGuard />,
    path: "/",
    children: [{ element: <EventPage />, path: "/events" }],
  },
];

export default privateRoutes;
