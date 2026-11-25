import useUserEventsList from "../hooks/useEventsList";
import EventsList from "./EventsList";

export default function UserEvents() {
  const { eventslist, isLoading, error } = useUserEventsList();

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
