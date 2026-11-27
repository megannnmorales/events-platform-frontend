import useEventsList from "../../hooks/useEventsList";
import EventsList from "./EventsList";

export default function Events() {
  const { eventslist, isLoading, error } = useEventsList();

  if (isLoading) {
    return <p>Loading Events...</p>;
  }
  if (error !== null) {
    return (
      <>
        <p>Oh no! An error! : {error}</p>
      </>
    );
  }

  return (
    <>
      <EventsList events={eventslist} />
    </>
  );
}
