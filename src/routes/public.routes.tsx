import EventsPage from "@/pages/events/EventsPage";
import HomePage from "@/pages/home/HomePage";

const publicRoutes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <EventsPage />,
    path: "/events",
  },
];

export default publicRoutes;
