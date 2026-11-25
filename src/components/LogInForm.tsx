import { useState } from "react";
import { useUser } from "../hooks/useUser";
import type { SubmitEvent } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useUser();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setEmail("");
      setPassword("");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <p>Log in</p>
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        password
      </label>
      <button>Submit</button>
    </form>
  );
}
