import UserEventsCard from "./UserEventsCard";
import type { UserEventsListItem } from "../../types";

interface UserEventsListProps {
  events: UserEventsListItem[];
}

export default function EventsList({ events }: UserEventsListProps) {
  return (
    <ul>
      {events.length > 0 ? (
        events.map((event) => (
          <UserEventsCard
            key={event.id}
            title={event.title}
            starts_at={event.starts_at}
            rsvp_date={event.rsvp_date}
            event_rank={event.event_rank}
            total_rsvps={event.total_rsvps}
          />
        ))
      ) : (
        <li className="empty-state">There are no events at this time.</li>
      )}
    </ul>
  );
}
