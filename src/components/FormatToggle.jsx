const OPTIONS = [
  { label: "12H", value: false },
  { label: "24H", value: true },
];

export default function FormatToggle({ is24Hour, onChange }) {
  return (
    <div className="toggle" role="group" aria-label="Time format">
      {OPTIONS.map((option) => (
        <button
          key={option.label}
          type="button"
          className={`toggle__btn ${is24Hour === option.value ? "is-active" : ""}`}
          aria-pressed={is24Hour === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
