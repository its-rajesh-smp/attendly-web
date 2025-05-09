import { useFetch } from "@/hooks";
import type { IEvent } from "@/types";
import { createQuery } from "@/utils";
import Event from "./Event";

function EventsContainer() {
  const query = createQuery({
    limit: 3,
  });
  const paginatedEvents = useFetch(`/event/all?${query}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {paginatedEvents?.events?.map((event: IEvent) => (
        <Event {...event} key={event.id} />
      ))}
    </div>
  );
}

export default EventsContainer;
