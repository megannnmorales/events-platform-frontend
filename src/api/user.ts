import type { RsvpResponse, UserEvents } from "../types";
import { apiDelete, apiGet, apiPost } from "./clients";

export const getUserEventsList = (
  signal?: AbortSignal,
): Promise<UserEvents> => {
  return apiGet<UserEvents>(`/api/user/me/events`, signal);
};

export const cancelRsvp = (id: number): Promise<void> => {
  return apiDelete(`/api/events/${id}/rsvp/me`);
};

export const addRsvp = (
  id: number,
  signal?: AbortSignal,
): Promise<RsvpResponse> => {
  return apiPost<RsvpResponse>(`/api/events/${id}/rsvp`, signal);
};
