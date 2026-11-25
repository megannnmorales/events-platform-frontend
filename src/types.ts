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

export interface UserEventsListItem {
  id: number;
  title: string;
  starts_at: string;
  rsvp_date: string;
  event_rank: number;
  total_rsvps: number;
}

export interface UserEvents {
  events: UserEventsListItem;
}
// address: "Discovery Way, Leeds, LS2 3AA";
// capacity: 200;
// created_at: "2026-11-23T15:26:04.151745+00:00";
// description: "Monthly meetup for Leeds-based developers. Lightning talks and networking.";
// ends_at: "2026-06-18T21:00:00+01:00";
// id: 1;
// starts_at: "2026-06-18T18:30:00+01:00";
// title: "Leeds Tech Meetup – June Edition";

// 0
// :
// description
// :
// "Monthly meetup for Leeds-based developers. Lightning talks and networking."
// ends_at
// :
// "2026-06-18T21:00:00+01:00"
// id
// :
// 1
// organiser_id
// :
// 1
// starts_at
// :
// "2026-06-18T18:30:00+01:00"
// title
// :
// "Leeds Tech Meetup – June Edition"
// venue_id
// :
// 1
