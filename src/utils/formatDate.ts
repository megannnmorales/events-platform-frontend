export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
  });
}

export function toIsoString(local: string): string {
  return new Date(local).toISOString();
}
