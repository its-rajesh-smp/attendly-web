import Footer from "@/components/ui/Footer";
import EventsHeader from "../components/events/EventsHeader";
import EventsPageFooter from "../components/events/EventsPageFooter";
import EventsTabs from "../components/events/EventsTabs";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EventsHeader />
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Discover Events</h2>
      </div>
      <EventsTabs />
      <EventsPageFooter />
      <Footer />
    </div>
  );
};

export default EventsPage;
