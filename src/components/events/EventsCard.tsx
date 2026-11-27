import { useNavigate } from "react-router";
import EventsText from "./EventsText";

interface EventsCardProps {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  onRsvp?: () => void;
  isAttending: boolean;
}

export default function EventsCard({
  title,
  description,
  starts_at,
  ends_at,
  id,
  onRsvp,
  isAttending,
}: EventsCardProps) {
  let navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/events/${id}`)}>
      <EventsText
        title={title}
        description={description}
        starts_at={starts_at}
        ends_at={ends_at}
      />
      {!isAttending ? null : (
        <button onClick={() => onRsvp}>I want to attend</button>
      )}
      {id ? null : <button onClick={() => navigate(-1)}>Go Back</button>}
    </li>
  );
}
