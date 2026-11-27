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
  isLoggedIn: boolean;
}

export default function EventsCard({
  title,
  description,
  starts_at,
  ends_at,
  id,
  onRsvp,
  isAttending,
  isLoggedIn,
}: EventsCardProps) {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/events/${id}`)}>
      <EventsText
        title={title}
        description={description}
        starts_at={starts_at}
        ends_at={ends_at}
      />
      {!isLoggedIn ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/");
          }}
        >
          Log in to RSVP
        </button>
      ) : isAttending ? (
        <span className="attending">I am attending</span>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRsvp?.();
          }}
        >
          I want to attend
        </button>
      )}
    </li>
  );
}
