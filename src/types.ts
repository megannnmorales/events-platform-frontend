export interface EventListItem {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  organiser_id: number;
  venue_id?: number;
}

export interface SingleEvent {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  address: string;
  capacity?: string;
}

export interface Events {
  events: EventListItem[];
}

export interface CreateEventResponse {
  event: EventListItem;
}

export interface UserEventsListItem {
  id: number;
  title: string;
  starts_at: string;
  rsvp_date: string;
  event_rank: number;
  total_rsvps: number;
}

export interface UserEvents {
  events: UserEventsListItem[];
}

export interface RsvpResponse {
  rsvp: RsvpResponseItem[];
}

export interface RsvpResponseItem {
  id: number;
  attendee_id: number;
  event_id: number;
  created_at: string;
}
export interface SingleEventResponse {
  event: SingleEvent;
}

export interface CreateEventInput {
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  venue_id: number;
}

export type EventFilter = "available" | "organised";
