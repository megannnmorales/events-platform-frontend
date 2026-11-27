import { formatDateTime } from "../../utils/formatDate";
interface EventsTextProps {
  title: string;
  starts_at: string;
  rsvp_date: string;
  event_rank: number;
  total_rsvps: number;
}

export default function EventsText({
  title,
  starts_at,
  rsvp_date,
  event_rank,
  total_rsvps,
}: Readonly<EventsTextProps>) {
  const start_time = formatDateTime(starts_at);
  const rsvpDate = formatDateTime(rsvp_date);
  return (
    <>
      <h3>{title}</h3>
      <p>
        {" "}
        {start_time} {rsvpDate}
        {event_rank}
        {total_rsvps}
      </p>
    </>
  );
}
