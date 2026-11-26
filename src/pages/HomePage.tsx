import LoginForm from "../components/LogInForm";
import useUser from "../hooks/useUser";

export default function Homepage() {
  const { userState } = useUser();
  return <>{userState.status === "anonymous" && <LoginForm />}</>;
}
