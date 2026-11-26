import { formatDateTime } from "../../utils/formatDate";
interface EventsTextProps {
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
}

export default function EventsText({
  title,
  description,
  starts_at,
  ends_at,
}: Readonly<EventsTextProps>) {
  const start_time = formatDateTime(starts_at);
  const end_time = formatDateTime(ends_at);
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        {" "}
        {start_time} - {end_time}
      </p>
    </>
  );
}
