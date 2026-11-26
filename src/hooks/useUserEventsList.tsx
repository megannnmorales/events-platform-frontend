import { useEffect, useState } from "react";
import type { UserEvents, UserEventsListItem } from "../types";
import { cancelRsvp, getUserEventsList } from "../api/user";

export default function useEventsList() {
  const [userEventsList, setUserEventsList] = useState<UserEventsListItem[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const removeRsvp = (id: number) => {
    const deleteUserRsvp = async () => {
      setError(null);

      try {
        await cancelRsvp(id);
        const updatedEvents = userEventsList.filter((event) => event.id !== id);
        setUserEventsList(updatedEvents);
      } catch (err) {
        setDeleteError(
          err instanceof Error ? err.message : "Something went wrong",
        );
      }
    };
    deleteUserRsvp();
  };

  useEffect(() => {
    const controller = new AbortController();
    const loadUserEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response: UserEvents = await getUserEventsList(controller.signal);
        setUserEventsList(response.events);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    loadUserEvents();
    return () => {
      controller.abort();
    };
  }, []);

  return { userEventsList, isLoading, error, removeRsvp, deleteError };
}
