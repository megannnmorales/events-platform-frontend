import { useParams } from "react-router";
import NotFoundPage from "./NotFoundPage";
import useEvent from "../hooks/useEvent";
import EventOne from "../../src/components/events/EventOne";
import useUserEventsList from "../hooks/useUserEventsList";
import useUser from "../hooks/useUser";

export default function EventPage() {
  const { id = "" } = useParams();
  const { event, isLoading, error } = useEvent(id);
  const { userEventsList, rsvpToEvent, addError } = useUserEventsList();
  const { userState } = useUser();

  if (!id || Number(id) <= 0) {
    return <NotFoundPage />;
  }
  if (isLoading) {
    return <p>Loading Event...</p>;
  }
  if (error !== null) {
    return <p>Oh no! An error! : {error}</p>;
  }
  if (event === undefined) {
    return <p>Loading Event...</p>;
  }

  if (addError !== null) {
    return <p>Oh no! An error! : {error}</p>;
  }
  const handleRsvp = () => {
    rsvpToEvent(event.id);
  };

  const isLoggedIn = userState.status === "success";
  const isAttending = userEventsList.some((event) => event.id === Number(id));
  console.log(isAttending, isLoggedIn);
  return (
    <>
      <EventOne
        id={event.id}
        title={event.title}
        description={event.description}
        starts_at={event.starts_at}
        ends_at={event.ends_at}
        onRsvp={handleRsvp}
        isAttending={isAttending}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}
