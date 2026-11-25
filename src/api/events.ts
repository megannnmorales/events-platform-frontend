import type { EventResponse } from "../hooks/useEvent";
import type { Events, UserEvents } from "../types";
import { apiGet } from "./clients";

export const getEventsList = (signal?: AbortSignal): Promise<Events> => {
  return apiGet<Events>("/api/events", signal);
};

export const getEvent = (
  id: string,
  signal?: AbortSignal,
): Promise<EventResponse> => {
  return apiGet<EventResponse>(`/api/events/${id}`, signal);
};

// export class EventsError extends Error {
//   code: "full" | "duplicate" | "unreadable" | "unavailable";
//   constructor(message: string, code: TeamError["code"]) { /* ... */ }
// }
export const getUserEventsList = (
  signal?: AbortSignal,
): Promise<UserEvents> => {
  return apiGet<UserEvents>(`/api/user/me/events`, signal);
};
