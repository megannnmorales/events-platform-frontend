import UserEvents from "../components/user/UserEvents";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router";

export default function UserEventsListPage() {
  const { userState } = useUser();

  if (userState.status === "anonymous") {
    return <Navigate to="/" />;
  }
  return (
    <>
      <UserEvents />
    </>
  );
}
