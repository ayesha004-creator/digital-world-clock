import { useState } from "react";
import { CITIES, DEFAULT_CITY_IDS, getCityTime } from "../utils/worldClock.js";

const DEFAULT_CITIES = DEFAULT_CITY_IDS.map((id) => CITIES.find((city) => city.id === id));

export default function WorldClock({ now, is24Hour }) {
  const [cities, setCities] = useState(DEFAULT_CITIES);
  const [query, setQuery] = useState("");
  const availableCities = CITIES.filter(
    (city) => !cities.some((selectedCity) => selectedCity.id === city.id)
  );
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const cityToAdd = availableCities.find(
    (city) =>
      `${city.name}, ${city.country}`.toLocaleLowerCase() === normalizedQuery ||
      city.name.toLocaleLowerCase() === normalizedQuery
  );

  function addCity(event) {
    event.preventDefault();

    if (!cityToAdd) return;

    setCities((currentCities) =>
      currentCities.some((city) => city.id === cityToAdd.id)
        ? currentCities
        : [...currentCities, cityToAdd]
    );
    setQuery("");
  }

  function removeCity(cityId) {
    setCities((currentCities) => currentCities.filter((city) => city.id !== cityId));
  }

  return (
    <section className="world-clock" aria-labelledby="world-clock-title">
      <header className="world-clock__header">
        <div>
          <p className="world-clock__eyebrow">Across the globe</p>
          <h2 className="world-clock__title" id="world-clock-title">World Clock</h2>
          <p className="world-clock__description">
            Keep an eye on the time in your favorite cities.
          </p>
        </div>

        <form className="city-search" onSubmit={addCity}>
          <label className="sr-only" htmlFor="city-search">Search cities to add</label>
          <input
            id="city-search"
            type="search"
            list="city-options"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a city..."
            autoComplete="off"
          />
          <datalist id="city-options">
            {availableCities.map((city) => (
              <option key={city.id} value={`${city.name}, ${city.country}`} />
            ))}
          </datalist>
          <button type="submit" disabled={!cityToAdd}>Add city</button>
        </form>
      </header>

      {cities.length > 0 ? (
        <div className="world-clock__grid">
          {cities.map((city) => {
            const cityTime = getCityTime(now, city.timeZone, is24Hour);

            return (
              <article className="city-card" key={city.id}>
                <div className="city-card__header">
                  <div>
                    <h3 className="city-card__name">{city.name}</h3>
                    <p className="city-card__country">{city.country}</p>
                  </div>
                  <button
                    className="city-card__remove"
                    type="button"
                    aria-label={`Remove ${city.name}`}
                    onClick={() => removeCity(city.id)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <time className="city-card__time" dateTime={now.toISOString()}>
                  {cityTime.time}
                  {cityTime.period && (
                    <span className="city-card__period"> {cityTime.period}</span>
                  )}
                </time>
                <p className="city-card__date">{cityTime.date}</p>
                <p className="city-card__offset">{cityTime.offset}</p>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="world-clock__empty">No cities yet. Search above to add one.</p>
      )}
    </section>
  );
}
