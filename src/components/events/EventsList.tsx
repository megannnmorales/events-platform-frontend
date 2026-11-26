import EventsCard from "./EventsCard";
import type { EventListItem } from "../../types";

interface EventsListProps {
  events: EventListItem[];
}

export default function EventsList({ events }: EventsListProps) {
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
          />
        ))
      ) : (
        <li className="empty-state">There are no events at this time.</li>
      )}
    </ul>
  );
}
