import EventsCard from "./EventsCard";

interface EventProps {
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
}

export default function Event({
  title,
  description,
  starts_at,
  ends_at,
}: EventProps) {
  return (
    <>
      <EventsCard
        title={title}
        description={description}
        starts_at={starts_at}
        ends_at={ends_at}
      />
    </>
  );
}
