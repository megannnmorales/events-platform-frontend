import type { Events } from "../types";
import { apiGet } from "./clients";
import type { SingleEventResponse } from "../types";

export const getEventsList = (signal?: AbortSignal): Promise<Events> => {
  return apiGet<Events>("/api/events", signal);
};

export const getEvent = (
  id: string,
  signal?: AbortSignal,
): Promise<SingleEventResponse> => {
  return apiGet<SingleEventResponse>(`/api/events/${id}`, signal);
};

// export class EventsError extends Error {
//   code: "full" | "duplicate" | "unreadable" | "unavailable";
//   constructor(message: string, code: TeamError["code"]) { /* ... */ }
// }
