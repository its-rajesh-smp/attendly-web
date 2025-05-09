import { Button } from "@/common/components/UI/Button";
import { Link } from "react-router";
import EventsContainer from "../EventsContainer";

function CurrentEventsSection() {
  return (
    <section id="current-events" className="py-16 lg:px-32 bg-gray-50">
      <div className=" flex flex-col justify-center items-center mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our most popular upcoming events and connect with amazing
            people from around the world
          </p>
        </div>

        {/* Events */}
        <EventsContainer />

        <Link to="/events">
          <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
            View All Events
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CurrentEventsSection;
