import useEvents from "../hooks/useEvents";
import EventsList from "./EventsList";

export default function Events() {
  const { eventslist } = useEvents();
  return (
    <>
      <EventsList events={eventslist} />
    </>
  );
}
