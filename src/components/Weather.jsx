
import WeatherDetail from "./WeatherDetail";

function Weather({ weather }) {
  const currentWeather = weather.weather[0];

  const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`;

  return (
    <section
      aria-label="Current weather information"
      className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/10 to-indigo-400/10 p-5 sm:p-8"
    >
      {/* City and weather condition */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:text-left">
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-300">
            Current Weather
          </p>

          <h2 className="mt-2 break-words text-2xl font-bold sm:text-3xl">
            {weather.name}, {weather.sys.country}
          </h2>

          <p className="mt-2 capitalize text-slate-300">
            {currentWeather.description}
          </p>
        </div>

        <img
          src={iconUrl}
          alt={currentWeather.description}
          width="112"
          height="112"
          className="h-24 w-24 drop-shadow-lg sm:h-28 sm:w-28"
        />
      </div>

      <div className="my-6 border-t border-white/10" />

      {/* Temperature */}
      <div className="text-center sm:text-left">
        <p className="text-6xl font-extrabold tracking-tight sm:text-7xl">
          {Math.round(weather.main.temp)}
          <span className="text-3xl text-sky-300">°C</span>
        </p>

        <p className="mt-3 text-sm text-slate-400">
          Feels like {Math.round(weather.main.feels_like)}°C
        </p>
      </div>

      {/* Additional weather details */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <WeatherDetail
          icon="💧"
          label="Humidity"
          value={`${weather.main.humidity}%`}
        />

        <WeatherDetail
          icon="💨"
          label="Wind Speed"
          value={`${weather.wind.speed} m/s`}
        />

        <WeatherDetail
          icon="🌡️"
          label="Pressure"
          value={`${weather.main.pressure} hPa`}
        />
      </div>
    </section>
  );
}

export default Weather;
