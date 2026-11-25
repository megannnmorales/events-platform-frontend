import UserEventsText from "./UserEventsText";

interface UserEventsCardProps {
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
}

export default function UserEventsCard({
  title,
  description,
  starts_at,
  ends_at,
}: UserEventsCardProps) {
  return (
    <li>
      <UserEventsText
        title={title}
        description={description}
        starts_at={starts_at}
        ends_at={ends_at}
      />
    </li>
  );
}
