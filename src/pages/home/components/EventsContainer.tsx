import useFetch from "@/common/hooks/useFetch";
import Event from "./UI/Event";
import type { IEvent } from "../types/event.type";

function EventsContainer() {
  const events: IEvent[] = useFetch("/event/all");
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {events?.map((event: IEvent) => (
        <Event {...event} key={event.id} />
      ))}
    </div>
  );
}

export default EventsContainer;
