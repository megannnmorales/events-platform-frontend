import { useParams } from "react-router";
import NotFoundPage from "./NotFoundPage";
import useEvent from "../hooks/useEvent";
import EventOne from "../../src/components/events/EventOne";

export default function EventPage() {
  const { id = "" } = useParams();
  const { event, isLoading, error } = useEvent(id);

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

  return (
    <>
      <EventOne
        title={event.title}
        description={event.description}
        starts_at={event.starts_at}
        ends_at={event.ends_at}
      />
    </>
  );
}
