import { createContext, useState, type ReactNode } from "react";
import { decodeID } from "../utils/decodeID";
import { writeToken } from "../utils/getLocalStorage";

export interface User {
  id: string;
}

export type UserState =
  | { status: "loading" }
  | { status: "anonymous" }
  | { status: "success"; user: User }
  | { status: "error"; message: string };

export interface UserContextValue {
  userState: UserState;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextValue | null>(null);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserState>({ status: "loading" });

  async function login(email: string, password: string) {
    const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 401) {
      throw new Error("Email or password is wrong");
    }
    if (!response.ok) throw new Error("Unable to login, please try again");

    const { access_token } = await response.json();
    const payload = decodeID(access_token);

    const id = payload.sub;

    if (id === undefined) {
      throw Error("no registered email/password found");
    }
    const currUser = { id: id };
    writeToken(access_token);

    setUser({ status: "success", user: currUser });
  }
  return <UserContext value={login}>{children}</UserContext>;
}
