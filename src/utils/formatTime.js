const pad = (n) => String(n).padStart(2, "0");

/**
 * Splits a Date into display-ready parts.
 * `period` is null in 24-hour mode.
 */
export function getTimeParts(date, is24Hour) {
  const h = date.getHours();
  const hours = is24Hour ? h : h % 12 || 12;

  return {
    hours: pad(hours),
    minutes: pad(date.getMinutes()),
    seconds: pad(date.getSeconds()),
    period: is24Hour ? null : h >= 12 ? "PM" : "AM",
  };
}

export function formatWeekday(date) {
  return date.toLocaleDateString(undefined, { weekday: "long" });
}

export function formatFullDate(date) {
  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
