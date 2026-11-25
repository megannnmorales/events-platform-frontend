interface EventsTextProps {
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
}

export default function EventsText({
  title,
  description,
  starts_at,
  ends_at,
}: Readonly<EventsTextProps>) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        {" "}
        {starts_at} - {ends_at}
      </p>
    </>
  );
}
