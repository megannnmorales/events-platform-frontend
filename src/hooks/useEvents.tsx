import { useEffect, useState } from "react";
import type { EventListItem, Events } from "../types";
import { getEventsList } from "../api/events";

export default function useEvents() {
  const [eventslist, setEventslist] = useState<EventListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const loadEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getEventsList({ signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Could not load events (${response.status})`);
        }

        const data: Events = await response.json();

        setEventslist(data.events);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    loadEvents();
  }, []);
  return { eventslist };
}
