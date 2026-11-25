import { useEffect, useState } from "react";
import type { EventListItem, Events } from "../types";
import { getEventsList } from "../api/events";

export default function useEventsList() {
  const [eventslist, setEventslist] = useState<EventListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const loadEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response: Events = await getEventsList(controller.signal);
        setEventslist(response.events);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    loadEvents();
    return () => {
      controller.abort();
    };
  }, []);
  return { eventslist, isLoading, error };
}
