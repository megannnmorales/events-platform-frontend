interface EventsTextProps {
  title: string;
  description: string;
  start_time: string;
  end_time?: string;
}

export default function EventsText({
  title,
  description,
  start_time,
  end_time,
}: Readonly<EventsTextProps>) {}
