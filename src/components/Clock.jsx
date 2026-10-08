import { getTimeParts } from "../utils/formatTime.js";
import TimeUnit from "./TimeUnit.jsx";
import FormatToggle from "./FormatToggle.jsx";
import DateDisplay from "./DateDisplay.jsx";

export default function Clock({ now, is24Hour, onFormatChange }) {
  const { hours, minutes, seconds, period } = getTimeParts(now, is24Hour);

  return (
    <section className="card" aria-label="Digital clock">
      <header className="card__header">
        <span className="card__label">
          <span className="card__dot" aria-hidden="true" />
          Local time
        </span>
        <FormatToggle is24Hour={is24Hour} onChange={onFormatChange} />
      </header>

      {/* Screen readers get one clear sentence instead of each digit */}
      <p className="sr-only" role="timer">
        {`${hours}:${minutes}:${seconds}${period ? " " + period : ""}`}
      </p>

      <div className="time">
        <TimeUnit value={hours} />
        <span className="time__sep" aria-hidden="true">:</span>
        <TimeUnit value={minutes} />
        <span className="time__sep" aria-hidden="true">:</span>
        <TimeUnit value={seconds} animate accent />
        {period && <span className="time__period">{period}</span>}
      </div>

      <DateDisplay date={now} />
    </section>
  );
}
