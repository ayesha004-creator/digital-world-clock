import { useState } from "react";
import Clock from "./components/Clock.jsx";
import WorldClock from "./components/WorldClock.jsx";
import useClock from "./hooks/useClock.js";

export default function App() {
  const now = useClock();
  const [is24Hour, setIs24Hour] = useState(false);

  return (
    <main className="app">
      <div className="dashboard">
        <Clock now={now} is24Hour={is24Hour} onFormatChange={setIs24Hour} />
        <WorldClock now={now} is24Hour={is24Hour} />
      </div>
    </main>
  );
}
