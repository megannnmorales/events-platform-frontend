import type { Event, Events } from "../types";
import { apiGet } from "./clients";

export const getEventsList = (signal?: AbortSignal): Promise<Events> => {
  return apiGet<Events>("/api/events", signal);
};

export const getEvent = (id: number, signal?: AbortSignal): Promise<Event> => {
  return apiGet<Event>(`/api/events/${id}`, signal);
};

// export class EventsError extends Error {
//   code: "full" | "duplicate" | "unreadable" | "unavailable";
//   constructor(message: string, code: TeamError["code"]) { /* ... */ }
// }
