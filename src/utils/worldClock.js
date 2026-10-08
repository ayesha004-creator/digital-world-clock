export const CITIES = [
  { id: "lahore", name: "Lahore", country: "Pakistan", timeZone: "Asia/Karachi" },
  { id: "london", name: "London", country: "United Kingdom", timeZone: "Europe/London" },
  { id: "new-york", name: "New York", country: "United States", timeZone: "America/New_York" },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", timeZone: "Asia/Dubai" },
  { id: "tokyo", name: "Tokyo", country: "Japan", timeZone: "Asia/Tokyo" },
  { id: "sydney", name: "Sydney", country: "Australia", timeZone: "Australia/Sydney" },
  { id: "toronto", name: "Toronto", country: "Canada", timeZone: "America/Toronto" },
  { id: "paris", name: "Paris", country: "France", timeZone: "Europe/Paris" },
  { id: "amsterdam", name: "Amsterdam", country: "Netherlands", timeZone: "Europe/Amsterdam" },
  { id: "auckland", name: "Auckland", country: "New Zealand", timeZone: "Pacific/Auckland" },
  { id: "bangkok", name: "Bangkok", country: "Thailand", timeZone: "Asia/Bangkok" },
  { id: "beijing", name: "Beijing", country: "China", timeZone: "Asia/Shanghai" },
  { id: "berlin", name: "Berlin", country: "Germany", timeZone: "Europe/Berlin" },
  { id: "cairo", name: "Cairo", country: "Egypt", timeZone: "Africa/Cairo" },
  { id: "chicago", name: "Chicago", country: "United States", timeZone: "America/Chicago" },
  { id: "delhi", name: "Delhi", country: "India", timeZone: "Asia/Kolkata" },
  { id: "hong-kong", name: "Hong Kong", country: "China", timeZone: "Asia/Hong_Kong" },
  { id: "honolulu", name: "Honolulu", country: "United States", timeZone: "Pacific/Honolulu" },
  { id: "istanbul", name: "Istanbul", country: "Türkiye", timeZone: "Europe/Istanbul" },
  { id: "jakarta", name: "Jakarta", country: "Indonesia", timeZone: "Asia/Jakarta" },
  { id: "johannesburg", name: "Johannesburg", country: "South Africa", timeZone: "Africa/Johannesburg" },
  { id: "los-angeles", name: "Los Angeles", country: "United States", timeZone: "America/Los_Angeles" },
  { id: "mexico-city", name: "Mexico City", country: "Mexico", timeZone: "America/Mexico_City" },
  { id: "moscow", name: "Moscow", country: "Russia", timeZone: "Europe/Moscow" },
  { id: "reykjavik", name: "Reykjavik", country: "Iceland", timeZone: "Atlantic/Reykjavik" },
  { id: "singapore", name: "Singapore", country: "Singapore", timeZone: "Asia/Singapore" },
  { id: "seoul", name: "Seoul", country: "South Korea", timeZone: "Asia/Seoul" },
  { id: "vancouver", name: "Vancouver", country: "Canada", timeZone: "America/Vancouver" },
];

export const DEFAULT_CITY_IDS = [
  "lahore",
  "london",
  "new-york",
  "dubai",
  "tokyo",
  "sydney",
  "toronto",
  "paris",
];

export function getCityTime(date, timeZone, is24Hour) {
  const timeParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24Hour,
  }).formatToParts(date);

  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).formatToParts(date);

  const offsetParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  }).formatToParts(date);

  const time = (type) => timeParts.find((part) => part.type === type)?.value;
  const day = (type) => dateParts.find((part) => part.type === type)?.value;

  return {
    time: `${time("hour")}:${time("minute")}:${time("second")}`,
    period: time("dayPeriod"),
    date: `${day("weekday")}, ${day("month")} ${day("day")}, ${day("year")}`,
    offset: offsetParts.find((part) => part.type === "timeZoneName")?.value,
  };
}
