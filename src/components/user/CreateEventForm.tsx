import { useState } from "react";
import useCreateEvent from "../../hooks/useCreateEvent";
import { toIsoString } from "../../utils/formatDate";

export default function CreateEventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const { createNewEvent, error, isSubmitting } = useCreateEvent();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createNewEvent({
      title,
      description,
      starts_at: toIsoString(startTime),
      ends_at: toIsoString(endTime),
      venue_id: 1,
    });
  };

  if (isSubmitting) {
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
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label htmlFor="start-time">
        Start time
        <input
          id="start-time"
          name="start-time"
          type="datetime-local"
          value={startTime}
          onChange={(event) => setStartTime(event.target.value)}
        />
      </label>
      <label htmlFor="end-time">
        End time
        <input
          id="end-time"
          name="end-time"
          type="datetime-local"
          value={endTime}
          onChange={(event) => setEndTime(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
