import EventsCard from "./EventsCard";
import type { EventListItem, UserEventsListItem } from "../../types";
import useUser from "../../hooks/useUser";
import useUserEventsList from "../../hooks/useUserEventsList";

interface EventsListProps {
  events: EventListItem[];
}

export default function EventsList({ events }: EventsListProps) {
  const { userEventsList, rsvpToEvent } = useUserEventsList();
  const { userState } = useUser();

  const isLoggedIn = userState.status === "success";

  return (
    <ul>
      {events.length > 0 ? (
        events.map((event) => (
          <EventsCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            starts_at={event.starts_at}
            ends_at={event.ends_at}
            isAttending={userEventsList.some(
              (userEvent: UserEventsListItem) =>
                event.id === Number(userEvent.id),
            )}
            isLoggedIn={isLoggedIn}
            onRsvp={() => rsvpToEvent(event.id)}
          />
        ))
      ) : (
        <li className="empty-state">There are no events at this time.</li>
      )}
    </ul>
  );
}
