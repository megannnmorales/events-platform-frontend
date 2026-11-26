import UserEventsCard from "./UserEventsCard";
import type { UserEventsListItem } from "../../types";

interface UserEventsListProps {
  events: UserEventsListItem[];
  onCancel: (id: number) => void;
}

export default function EventsList({ events, onCancel }: UserEventsListProps) {
  return (
    <ul>
      {events.map((event) => (
        <UserEventsCard
          key={event.id}
          title={event.title}
          starts_at={event.starts_at}
          rsvp_date={event.rsvp_date}
          event_rank={event.event_rank}
          total_rsvps={event.total_rsvps}
          id={event.id}
          onCancel={onCancel}
        />
      ))}
    </ul>
  );
}
