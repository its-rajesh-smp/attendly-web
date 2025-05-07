import { Button } from "@/common/components/UI/Button";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useState } from "react";
import { Link } from "react-router";
import { toggleEventParticipation } from "../../services/event.service";
import type { IEvent } from "../../types/event.type";

function Event({
  title,
  thumbnail,
  description,
  date,
  id,
  EventParticipation,
}: IEvent) {
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);
  const [isParticipating, setIsParticipating] = useState(
    EventParticipation?.length > 0
  );

  const handelParticipation = async () => {
    await toggleEventParticipation(id);
    setIsParticipating(!isParticipating);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <img
          className="w-full h-full object-cover absolute"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(date).toDateString()}
          </span>
          {isAuthenticated ? (
            <Button onClick={handelParticipation} variant="outline" size="sm">
              {isParticipating ? "Leave" : "RSVP"}
            </Button>
          ) : (
            <Button variant="outline" size="sm">
              <Link to="/register">Join to RSVP</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Event;
