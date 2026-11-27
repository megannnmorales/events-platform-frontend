import { useState } from "react";
import { createEvent } from "../api/organiser";
import type { CreateEventInput } from "../types";

export default function useCreateEvent() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createNewEvent = async (body: CreateEventInput) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await createEvent(body);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return { createNewEvent, isSubmitting, error };
}
