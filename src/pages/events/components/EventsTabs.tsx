import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/components/UI/Tabs";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useFetch from "@/common/hooks/useFetch";
import { createQuery } from "@/common/utils";
import type { IEvent } from "@/pages/home/types/event.type";
import { useState } from "react";
import EventsContainer from "./EventsContainer";

const ITEMS_PER_PAGE = 6;

function EventsTabs() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);

  const query = createQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    isRsvpToEvent: activeTab === "rsvp",
  });

  const paginatedEvents = useFetch(`/event/all?${query}`);
  const events: IEvent[] = paginatedEvents?.events || [];
  const totalPages = paginatedEvents?.pagination?.totalPages || 1;

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1); // reset to first page
  };

  if (!paginatedEvents) return null;

  return (
    <Tabs
      defaultValue="all"
      className="max-w-5xl mx-auto"
      onValueChange={handleTabChange}
    >
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="rsvp">My RSVP Events</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="mt-0">
        {events.length > 0 ? (
          <EventsContainer
            events={events}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        ) : (
          <EmptyState message="No events found" />
        )}
      </TabsContent>

      <TabsContent value="rsvp" className="mt-0">
        {events.length > 0 && isAuthenticated ? (
          <EventsContainer
            events={events}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        ) : (
          <EmptyState message="No RSVP events found" />
        )}
      </TabsContent>
    </Tabs>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium text-gray-600">{message}</h3>
      <p className="text-gray-500 mt-2">Check back soon for updates!</p>
    </div>
  );
}

export default EventsTabs;
