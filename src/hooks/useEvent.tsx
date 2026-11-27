import { useEffect, useState } from "react";
import type { SingleEvent } from "../types";
import { getEvent } from "../api/events";

export default function useEvent(id: string) {
  const [event, setEvent] = useState<SingleEvent>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const loadEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getEvent(id, controller.signal);
        setEvent(response.event);
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
  }, [id]);
  console.log(`event before return: ${event}`);
  return { event, isLoading, error };
}
