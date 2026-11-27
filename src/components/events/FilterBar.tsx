import type { EventFilter } from "../../types";

interface FilterBarProps {
  current: EventFilter;
  onChange: (filter: EventFilter) => void;
}

const OPTIONS: { value: EventFilter; label: string }[] = [
  { value: "available", label: "Available events" },
  { value: "organised", label: "Events organised by me" },
];

export default function FilterBar({
  current,
  onChange,
}: Readonly<FilterBarProps>) {
  return (
    <fieldset className="filter-bar">
      <legend>Status</legend>
      {OPTIONS.map(({ value, label }) => (
        <label key={value}>
          <input
            type="radio"
            name="status"
            value={value}
            checked={value === current}
            onChange={() => onChange(value)}
          />
          {label}
        </label>
      ))}
    </fieldset>
  );
}
