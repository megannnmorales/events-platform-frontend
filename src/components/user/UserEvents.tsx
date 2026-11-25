import useUserEventsList from "../../hooks/useUserEventsList";
import UserEventsList from "./UserEventsList";

export default function UserEvents() {
  const { userEventsList, isLoading, error } = useUserEventsList();

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
      <UserEventsList events={userEventsList} />
    </>
  );
}
