import { Button } from "@/common/components/UI/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/UI/Card";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Logger } from "@/common/utils";
import {
  rsvpToEvent,
  unRsvpFromEvent,
} from "@/pages/home/services/event.service";
import type { IEvent } from "@/pages/home/types/event.type";
import { Calendar } from "lucide-react";
import { useState } from "react";

const Event = ({
  event,
  isShowOnlyRsvpd,
}: {
  event: IEvent;
  isShowOnlyRsvpd?: boolean;
}) => {
  const { id, title, thumbnail, description, date, isRsvpToEvent } = event;

  const { isAuthenticated } = useAppSelector((state) => state.authSlice);

  const [isCurrentRsvpToEvent, setIsCurrentRsvpToEvent] =
    useState(isRsvpToEvent);
  const [loading, setLoading] = useState(false);

  const handelRsvp = async () => {
    setLoading(true);
    try {
      if (isCurrentRsvpToEvent) {
        await unRsvpFromEvent(id);
      } else {
        await rsvpToEvent(id);
      }
      setIsCurrentRsvpToEvent(!isCurrentRsvpToEvent);
    } catch (error) {
      Logger.logError(error);
    } finally {
      setLoading(false);
    }
  };

  if (isShowOnlyRsvpd && !isCurrentRsvpToEvent) return null;

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={thumbnail || "/gibli-event-image.jpg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          {isCurrentRsvpToEvent && (
            <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              RSVP'd
            </div>
          )}
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{new Date(date).toDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          loading={loading}
          disabled={loading || !isAuthenticated}
          variant={
            isCurrentRsvpToEvent && isAuthenticated ? "outline" : "default"
          }
          className={`w-full ${
            isCurrentRsvpToEvent && isAuthenticated
              ? ""
              : "bg-purple-500 hover:bg-purple-500/90"
          }`}
          onClick={handelRsvp}
        >
          {!isAuthenticated
            ? "Login to RSVP"
            : isCurrentRsvpToEvent
            ? "Cancel RSVP"
            : "RSVP"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Event;
