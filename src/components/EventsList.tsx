import EventsCard from "./EventsCard";

interface EventListProps{
    event: []
}

export default function EventsList({ event }: EventListProps) {
  return (
    <ul>
        {event.map((event) =>  (<EventsCard title={event.title} description={event.description} start_time={event.start_time} end_time={event.end_time{/>)}
        </ul>
  );
}
