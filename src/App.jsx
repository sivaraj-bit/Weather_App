
import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get("/api/weather", {
        params: {
          city: city.trim(),
        },
      });

      setWeather(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to fetch weather. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      <Navbar />

      <main
        id="home"
        className="w-full flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
      >
        <div className="mx-auto w-full max-w-4xl">
          {/* Page heading */}
          <header className="mb-8 text-center sm:mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-200">
              <span aria-hidden="true">✨</span>
              Live Weather Updates
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Weather<span className="text-sky-400">Wise</span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Discover real-time weather conditions and stay
              prepared wherever your day takes you.
            </p>
          </header>

          {/* Weather search */}
          <section
            id="weather"
            aria-label="Search for current weather"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8"
          >
            <form
              onSubmit={handleSearch}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="city" className="sr-only">
                Enter city name
              </label>

              <input
                id="city"
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Enter a city, e.g. Chennai"
                autoComplete="off"
                className="w-full min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-base text-white outline-none placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 sm:py-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-sky-500 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:shrink-0 sm:px-7 sm:py-4"
              >
                {loading ? "Searching..." : "Search Weather"}
              </button>
            </form>

            {/* Error message */}
            {error && (
              <p
                role="alert"
                className="mt-4 break-words rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200"
              >
                {error}
              </p>
            )}

            {/* Loading state */}
            {loading && (
              <div
                role="status"
                className="mt-6 flex items-center justify-center gap-3 py-6 text-sky-300"
              >
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-sky-300/30 border-t-sky-300" />
                <span>Fetching the latest weather...</span>
              </div>
            )}

            {/* Empty state */}
            {!weather && !error && !loading && (
              <div className="px-3 py-10 text-center sm:py-14">
                <div className="mb-4 text-5xl" aria-hidden="true">
                  🌍
                </div>

                <h2 className="text-lg font-semibold text-slate-200 sm:text-xl">
                  Your city's weather, at a glance
                </h2>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
                  Search for any city to discover its current
                  temperature, humidity, and wind speed.
                </p>
              </div>
            )}

            {/* Weather results */}
            {weather && (
              <div aria-live="polite">
                <Weather weather={weather} />
              </div>
            )}
          </section>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Weather information powered by OpenWeatherMap.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
