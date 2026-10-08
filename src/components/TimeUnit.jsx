/**
 * Renders a two-digit unit (hours, minutes or seconds).
 * When `animate` is true, each digit re-mounts on change (via `key`)
 * which replays a short fade-in animation.
 */
export default function TimeUnit({ value, animate = false, accent = false }) {
  return (
    <span className={`unit ${accent ? "unit--accent" : ""}`} aria-hidden="true">
      {value.split("").map((digit, index) => (
        <span
          key={animate ? `${index}-${digit}` : index}
          className={`digit ${animate ? "digit--animate" : ""}`}
        >
          {digit}
        </span>
      ))}
    </span>
  );
}
