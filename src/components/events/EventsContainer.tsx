import type { IEvent } from "@/types";
import Event from "./Event";
import EventPagination from "./EventPagination";

function EventsContainer({
  events,
  currentPage,
  totalPages,
  handlePageChange,
}: {
  events: IEvent[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}) {
  return (
    events.length > 0 && (
      <>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            totalPages <= 1 && "mb-10"
          }`}
        >
          {events.map((event) => (
            <Event
              key={`${event.id}+${event.isRsvpToEvent}`} // Doing this hack to force re-render
              event={event}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <EventPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </>
    )
  );
}

export default EventsContainer;
