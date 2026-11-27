import { useState } from "react";

export default function CreateEventForm() {
  const [title, setTitle] = useState;
  const [description, setDecscription] = useState;
  const [startTime, setStartTime] = useState;
  const [endTime, setEndTime] = useState;

  const handleSubmit(() => )

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
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
    </form>
  );
}
