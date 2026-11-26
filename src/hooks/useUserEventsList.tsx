import { useEffect, useState } from "react";
import type { UserEvents, UserEventsListItem } from "../types";
import { addRsvp, cancelRsvp, getUserEventsList } from "../api/user";

export default function useEventsList() {
  const [userEventsList, setUserEventsList] = useState<UserEventsListItem[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [addError, setAddError] = useState<string | null>(null);

  const loadUserEvents = async (signal?: AbortSignal) => {
    setIsLoading(true);
    setError(null);

    try {
      const response: UserEvents = await getUserEventsList(signal);
      setUserEventsList(response.events);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const rsvpToEvent = async (id: number) => {
    setAddError(null);

    try {
      await addRsvp(id);
      await loadUserEvents();
    } catch (err) {
      setAddError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const removeRsvp = async (id: number) => {
    setDeleteError(null);

    try {
      await cancelRsvp(id);
      setUserEventsList(userEventsList.filter((event) => event.id !== id));
    } catch (err) {
      setDeleteError(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    loadUserEvents(controller.signal);
    return () => {
      controller.abort();
    };
  }, []);

  return {
    userEventsList,
    isLoading,
    error,
    rsvpToEvent,
    removeRsvp,
    deleteError,
    addError,
  };
}
