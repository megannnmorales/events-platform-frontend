import useUserEventsList from "../../hooks/useUserEventsList";
import UserEventsList from "./UserEventsList";

export default function UserEvents() {
  const { userEventsList, isLoading, error, removeRsvp } = useUserEventsList();

  const handleCancel = (id: number) => {
    removeRsvp(id);
  };

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
      <h2> My Events</h2>
      <UserEventsList events={userEventsList} onCancel={handleCancel} />
    </>
  );
}
