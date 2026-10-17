
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="about"
      className="border-t border-white/10 bg-slate-950 px-4 py-8 text-slate-400 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="inline-block text-lg font-extrabold text-white transition hover:text-sky-400"
          >
            Weather<span className="text-sky-400">Wise</span>
          </a>

          <p className="mt-2 text-sm">
            Weather insights for your day.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-5 text-sm sm:justify-end">
            <li>
              <a
                href="#home"
                className="transition hover:text-sky-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#weather"
                className="transition hover:text-sky-400"
              >
                Weather
              </a>
            </li>

            <li>
              <a
                href="https://openweathermap.org/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-400"
              >
                Weather API
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-5 text-center text-xs leading-5 sm:text-left">
        <p>
          Weather data powered by{" "}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 transition hover:text-sky-300"
          >
            OpenWeatherMap
          </a>
          .
        </p>

        <p className="mt-2">
          © {currentYear} WeatherWise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
