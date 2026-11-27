import type { CreateEventInput, CreateEventResponse } from "../types";
import { apiPost } from "./clients";

export const createEvent = (
  body: CreateEventInput,
): Promise<CreateEventResponse> => {
  try {
    return apiPost<CreateEventResponse>(`/api/events`, body);
  } catch (error) {
    throw new Error();
  }
};
