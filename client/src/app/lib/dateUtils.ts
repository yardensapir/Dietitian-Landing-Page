export function formatDate(isoString: string): string {
  if (!isoString) return "";

  const date = new Date(isoString);

  if (isNaN(date.getTime())) return "";

  const formatter = new Intl.DateTimeFormat("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatter.format(date);
}

export function formatSimpleDate(isoString: string): string {
  if (!isoString) return "";

  const date = new Date(isoString);

  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("he-IL");
}
