import UserEventsText from "./UserEventsText";

interface UserEventsCardProps {
  title: string;
  starts_at: string;
  rsvp_date: string;
  event_rank: number;
  total_rsvps: number;
}

export default function UserEventsCard({
  title,
  starts_at,
  rsvp_date,
  event_rank,
  total_rsvps,
}: UserEventsCardProps) {
  return (
    <li>
      <UserEventsText
        title={title}
        starts_at={starts_at}
        rsvp_date={rsvp_date}
        event_rank={event_rank}
        total_rsvps={total_rsvps}
      />
    </li>
  );
}
