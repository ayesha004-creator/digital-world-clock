import { useState, useEffect } from "react";

/**
 * Returns the current Date and refreshes it every second.
 */
export default function useClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // clean up when the component unmounts
  }, []);

  return now;
}
