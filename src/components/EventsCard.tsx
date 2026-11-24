import EventsText from "./EventsText";

interface EventsCardProps {
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
}

export default function EventsCard({
  title,
  description,
  starts_at,
  ends_at,
}: EventsCardProps) {
  return (
    <li>
      <EventsText
        title={title}
        description={description}
        starts_at={starts_at}
        ends_at={ends_at}
      />
    </li>
  );
}
