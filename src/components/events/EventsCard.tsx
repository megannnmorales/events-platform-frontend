import { useNavigate } from "react-router";
import EventsText from "./EventsText";

interface EventsCardProps {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  onRsvp: () => void;
}

export default function EventsCard({
  title,
  description,
  starts_at,
  ends_at,
  id,
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
      {id ? null : <button onClick={() => navigate(-1)}>Go Back</button>}
      {id ? null : <button onClick={() => navigate(-1)}>Go Back</button>}
    </li>
  );
}
