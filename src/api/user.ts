import type { UserEvents } from "../types";
import { apiDelete, apiGet } from "./clients";

export const getUserEventsList = (
  signal?: AbortSignal,
): Promise<UserEvents> => {
  return apiGet<UserEvents>(`/api/user/me/events`, signal);
};

export const cancelRSVP = (id: number, signal?: AbortSignal): Promise<void> => {
  return apiDelete(`/api/events/${id}/rsvp/me`, signal);
};
