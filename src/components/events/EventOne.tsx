import { useNavigate } from "react-router";
import EventsCard from "./EventsCard";

interface EventProps {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  onRsvp: () => void;
  isAttending: boolean;
  isLoggedIn: boolean;
}

export default function Event({
  id,
  title,
  description,
  starts_at,
  ends_at,
  onRsvp,
  isAttending,
  isLoggedIn,
}: EventProps) {
  let navigate = useNavigate();

  return (
    <>
      <EventsCard
        id={id}
        title={title}
        description={description}
        starts_at={starts_at}
        ends_at={ends_at}
        onRsvp={onRsvp}
        isAttending={isAttending}
        isLoggedIn={isLoggedIn}
      />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
