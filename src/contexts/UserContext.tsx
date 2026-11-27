import { createContext, useMemo, useState, type ReactNode } from "react";
import { decodeID } from "../utils/decodeID";
import { clearToken, readToken, writeToken } from "../utils/getLocalStorage";
import { useEffect } from "react";

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
  const [user, setUser] = useState<UserState>(
    readToken() ? { status: "loading" } : { status: "anonymous" },
  );

  useEffect(() => {
    const token = readToken();
    if (!token) return;

    fetchCurrentUser(token)
      .then((user) => {
        setUser({ status: "success", user });
      })
      .catch((err) => {
        if (err instanceof Error) {
          clearToken();
          setUser({ status: "anonymous" });
        } else {
          setUser({ status: "error", message: "Unable to fetch user" });
        }
      });
  }, []);

  async function fetchCurrentUser(token: string) {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/me/events`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
    );
    if (!response.ok) throw new Error("something went wrong!");

    return await response.json();
  }

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
      throw new Error("no registered email/password found");
    }
    const currUser = { id: id };
    writeToken(access_token);

    setUser({ status: "success", user: currUser });
  }

  const value = useMemo(() => ({ userState: user, login }), [user]);

  return <UserContext value={value}>{children}</UserContext>;
}
