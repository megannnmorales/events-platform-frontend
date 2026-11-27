import { useState } from "react";
import useEventsList from "../../hooks/useEventsList";
import useUser from "../../hooks/useUser";
import EventsList from "./EventsList";
import FilterBar from "./FilterBar";
import type { EventFilter } from "../../types";

export default function Events() {
  const { eventslist, isLoading, error } = useEventsList();
  const { userState } = useUser();
  const [filter, setFilter] = useState<EventFilter>("available");

  let visibleEvents = eventslist;

  if (userState.status === "success") {
    visibleEvents =
      filter === "available"
        ? eventslist.filter(
            (event) => event.organiser_id !== Number(userState.user.id),
          )
        : eventslist.filter(
            (event) => event.organiser_id === Number(userState.user.id),
          );
  }

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
      {userState.status === "success" && (
        <FilterBar current={filter} onChange={setFilter} />
      )}
      <EventsList events={visibleEvents} />
    </>
  );
}
