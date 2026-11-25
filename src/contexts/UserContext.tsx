import {
  createContext,
  useState,
  type ReactNode,
} from "react";

export interface User {
  email: string;
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

    async function fetchCurrentUser(token: string) {
    const getResponse = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      },
    },)
  return;
}
