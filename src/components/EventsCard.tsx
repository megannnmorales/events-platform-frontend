import EventsText from "./EventsText";

interface EventsCardProps {
  title: string;
  description: string;
  start_time: string;
  end_time?: string;
}

export default function EventsCard({
  title,
  description,
  start_time,
  end_time,
}: EventsCardProps) {
  return (
    <li>
      <EventsText
        title={title}
        description={description}
        start_time={start_time}
        end_time={end_time}
      />
    </li>
  );
}
