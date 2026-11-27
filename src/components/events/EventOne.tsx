import EventsCard from "./EventsCard";

interface EventProps {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  onRsvp: () => void;
  isAttending: boolean;
}

export default function Event({
  id,
  title,
  description,
  starts_at,
  ends_at,
  onRsvp,
  isAttending,
}: EventProps) {
  return (
    <EventsCard
      id={id}
      title={title}
      description={description}
      starts_at={starts_at}
      ends_at={ends_at}
      onRsvp={onRsvp}
      isAttending={isAttending}
    />
  );
}
