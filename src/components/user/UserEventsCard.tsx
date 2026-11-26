import { useNavigate } from "react-router";
import UserEventsText from "./UserEventsText";

interface UserEventsCardProps {
  id: number;
  title: string;
  starts_at: string;
  rsvp_date: string;
  event_rank: number;
  total_rsvps: number;
  onCancel: (id: number) => void;
}

export default function UserEventsCard({
  id,
  title,
  starts_at,
  rsvp_date,
  event_rank,
  total_rsvps,
  onCancel,
}: UserEventsCardProps) {
  let navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/events/${id}`)}>
      <UserEventsText
        title={title}
        starts_at={starts_at}
        rsvp_date={rsvp_date}
        event_rank={event_rank}
        total_rsvps={total_rsvps}
      />
      <button onClick={() => onCancel(id)}>No longer want to attend</button>
    </li>
  );
}
