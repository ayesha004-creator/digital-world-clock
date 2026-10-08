import { formatWeekday, formatFullDate } from "../utils/formatTime.js";

export default function DateDisplay({ date }) {
  return (
    <div className="date">
      <p className="date__weekday">{formatWeekday(date)}</p>
      <p className="date__full">{formatFullDate(date)}</p>
    </div>
  );
}
